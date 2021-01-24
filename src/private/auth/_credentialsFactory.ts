import { ClientHandlerFactory, QuestradeAPIOptions } from '../..';
import { errorlog, infolog } from '../../resources/side-effects';
import { AcountNumberString, IAccount } from '../../typescript';
import { _getAccounts } from '../api/AccountsCalls/_getAccounts/_getAccounts';
import { _getServerTime } from '../api/AccountsCalls/_getServerTime/_getServerTime';
import { _clientGetApi } from '../routes';
import { _oAuthHttpCredentials } from './xx-http-auth-xx';

/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
const _credentialsFactory = async (
  options: QuestradeAPIOptions,
  proxyFactory?: () => ClientHandlerFactory,
) => {
  let proxy: ClientHandlerFactory | undefined;

  if (proxyFactory) {
    proxy = proxyFactory();
  }

  const credentials = await _oAuthHttpCredentials(options, proxy);

  try {
    const accounts = await _getAccounts(_clientGetApi(credentials, proxy))();
    const time = await _getServerTime(_clientGetApi(credentials, proxy))();

    const timZoneOffset = new Date(time).getTimezoneOffset();
    const timZone = -1 * 60 * 1000 * timZoneOffset;
    const serverTime = new Date(time).getTime();
    const expireAt = serverTime + credentials.expiresIn * 1000;

    credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
    credentials.tokenExpiration = new Date(timZone + expireAt);
    credentials.expiresAtRaw = expireAt;
    credentials.serverTime = new Date(timZone + serverTime);
    credentials.serverTimeRaw = serverTime;
    credentials.accountNumber = _getPrimaryAccountNumber(accounts);
    credentials.expiresAt_ = new Date(
      credentials.expiresAtRaw ?? 0,
    ).toLocaleTimeString();
    credentials.serverTime_ = new Date(
      credentials.serverTimeRaw ?? 0,
    ).toLocaleTimeString();

    if (credentials.accountNumber === '00000000') {
      void infolog<unknown>(
        '\n🧐\n🤡 MOCK Server Time:   ',
        new Date().toISOString(),

        '\n🍦 Status: MOCKING!!!\n🤨',
      );
    } else {
      void infolog<unknown>(
        'Questrade Server Time:',
        time,
        '\nStatus: ready\n',
      );
    }
  } catch (error) {
    void errorlog(error.message);
    void infolog<unknown>(credentials.toValue());
    throw new Error('_oAuth Error getting credentials');
  }
  return credentials;
};

/** PROVIDE: IAccount[] THEN GET:  a 'primaryAccountNumber string'  */
function _getPrimaryAccountNumber(accounts: IAccount[]): AcountNumberString {
  if (!accounts || accounts.length === 0) {
    void errorlog(
      "WARNING('No account number found') will default to '11111111' ",
    );

    return '11111111';
  }
  if (accounts.length === 1) {
    return accounts[0].number;
  }
  const primary = accounts.filter(account => account.isPrimary);

  if (primary.length > 0) {
    return primary[0].number;
  }
  return accounts[0].number;
}

export { _credentialsFactory, _getPrimaryAccountNumber };