import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { ISymbols } from '../../../../typings';
import { Credentials } from '../../../typescript';
// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (prefix: string): Promise<number> => {
  return (await _axiosGetApi(_axios)(credentials)<ISymbols>(
    `/symbols/search?prefix=${prefix}`
  )()).symbols.length;
};