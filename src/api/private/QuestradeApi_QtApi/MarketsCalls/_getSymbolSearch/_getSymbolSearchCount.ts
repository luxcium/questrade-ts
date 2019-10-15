import { Credentials, ISymbols } from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/API_Request_AXIOS';

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (credentials: Credentials) => async (
  prefix: string
): Promise<number> => {
  return (await _axiosGetApi(credentials)<ISymbols>(
    `/symbols/search?prefix=${prefix}`
  )()).symbols.length;
};
