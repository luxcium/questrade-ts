// tslint:disable-next-line: no-var-requires
import { redeemToken } from '../..';
import { getMyToken } from '../../get-token';
// import { void0 } from '../../utils';

async function main() {
  // inside of an async function or async IIFE
  const { qtApi, credentials } = await redeemToken(getMyToken());
  return (async () => {
    const echo = console.log;
    const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
    void parser;
    echo('credentials:', credentials);
    echo('serverTime:', qtApi.serverTime);
    // echo({
    // echo(credentials.toValue());
    // echo(qtApi.serverTime);
    // echo((await qtApi.myBalances()).CAD.combined.current.buyingPower);
    // 2021-01-01T07:43:26.305Z
    // 2014-01-02T00:00:00.000000-05:00
    // void0(
    //   await qtApi.market.getCandlesByStockId(8049)()(
    //     '2019-12-11T07:43:26.305Z'
    //   )('2021-01-01T07:43:26.305Z')
    // );

    echo('credentials.response_');
    echo('credentials.response_');
    echo('credentials.response_');
    echo('credentials.response_');
    echo('credentials.response_');
    // echo(credentials.response_);

    echo(credentials.toValue());
    // echo(credentials.toString());
    // echo(credentials.toValue());
    // echo(await (await account()).getBalances());
    // echo(await (await account()).getAllAccounts());
    // echo(await executions30Days());
    // echo(await orders30Days());
    // echo(await orders30Days());
    // echo(await orders30Days());
    // echo(await orders30Days());
    // echo((await account()).getOrdersByIds([123]));
    // echo(await (await account()).getPositions());
    // echo(await (await account()).getServerTime());
    // echo(await (await market()).getAllMarkets());
    // echo(await candel30Day());
    // echo(await candel30Day());
    // echo(await (await getQuotes()).byStockIds([8049]));
    // echo(await (await getQuotes()).byStrategies(demoRequestVariants));
    // echo(
    // echo(await (await getOptionsQuotes()).byOptionsIds([27_244_725]));
    // echo(await (await search()).stock('aapl'));
    // echo(await (await search()).stock('aapl', 0));
    // echo(await (await search()).allStocks('aapl'));
    // echo(await (await search()).allStocks('aapl', 0));
    // echo(await (await search()).countResults('aapl'));
    // echo(await (await getOptionChains()).byStockId(8049));
    // echo(await (await getSymbols()).byStockIds([8049]));
    // echo(log);

    // Validate the server time as your hello world for this package

    // // inside an async function use await qt.get.<... some properties or methods>
    // echo(await qtApi.myBalances());
    // echo(await qtApi.account.getBalances());
    // echo(credentials);
    // await qtApi.market.getAllMarkets();
    // echo('accessToken  →  ', parser(credentials.accessToken));
    // echo('accountNumber  →  ', parser(credentials.accountNumber));
    // echo('accessToken  →  ', parser(credentials.accessToken));
    // echo('accountNumber  →  ', parser(credentials.accountNumber));
    // echo('apiServer  →  ', parser(credentials.apiServer));
    // echo('apiUrl  →  ', parser(credentials.apiUrl));
    // echo('apiVersion  →  ', parser(credentials.apiVersion));
    // echo('authUrl  →  ', parser(credentials.authUrl));
    // echo('expiresAt  →  ', parser(credentials.expiresAt));
    // echo('expiresAtRaw  →  ', parser(credentials.expiresAtRaw));
    // echo('expiresIn  →  ', parser(credentials.expiresIn));
    // echo('keyDir  →  ', parser(credentials.keyDir));
    // echo('keyFile  →  ', parser(credentials.keyFile));
    // echo('practice  →  ', parser(credentials.practice));
    // echo('tokenExpiration  →  ', parser(credentials.tokenExpiration));
    // echo('refreshToken  →  ', parser(credentials.refreshToken));
    // echo('seedToken  →  ', parser(credentials.seedToken));
    // echo('serverTime  →  ', parser(credentials.serverTime));
    // echo('serverTimeRaw  →  ', parser(credentials.serverTimeRaw));
    // echo('tokenType  →  ', parser(credentials.tokenType));
    // echo('remainingRequests  →  ', parser(credentials.remainingRequests));
    // echo('response_.headers  →  ', parser(credentials.response_?.headers));
    // echo('response_.status  →  ', parser(credentials.response_?.status));
    // echo('response_.statusText  →  ', parser(credentials.response_?.statusText));
    // echo('response_.data  →  ', parser('credentials.response_.data'));
    // echo('config_  →  ', parser(credentials.config_));
    // echo('urlHash64  →  ', parser(credentials.urlHash64));
    // echo('urlHashHex  →  ', parser(credentials.urlHashHex));
    // echo('urlTime  →  ', parser(credentials.urlTime));
    // echo('serverTime_  →  ', parser(credentials.serverTime_));
    // echo('expiresAt_  →  ', parser(credentials.expiresAt_));

    // you can use a try/catch block to manage error instead:
  })().catch(error => console.error(error.message));
}
main();
// async function then() {
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
//   await main();
// }
// then();
/*

(
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"
node "/home/luxcium/dev/questrade-ts/build/src/test/playground/redeem.js"  )
 */
