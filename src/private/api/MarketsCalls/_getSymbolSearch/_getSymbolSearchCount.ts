import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  ClientProxyHandler,
  Credentials,
  ISymbols,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (prefix: string): Promise<number> => {
  try {
    const endpoint = `/symbols/search?prefix=${prefix}`;
    const getSymbols = _axiosGetApi(credentials, proxy)<ISymbols>(endpoint);
    const symbols = await getSymbols();

    return symbols.symbols.length;
  } catch (error) {
    void errorlog(error);

    return Number.NaN;
  }
};
