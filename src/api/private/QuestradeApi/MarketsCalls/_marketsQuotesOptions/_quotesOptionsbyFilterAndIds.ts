import { AxiosStatic, default as axios } from 'axios';
import { Credentials } from '../../../../typescript';
import {
  _getQuotesOptionsByIds,
  _getQuotesOptionsFilter,
} from '../_marketsQuotesOptions';
import { QuotesOptionsbyFilterAndIds } from './typescript';

export const _quotesOptionsbyFilterAndIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
): QuotesOptionsbyFilterAndIds => {
  const quotesOptionsFilter: QuotesOptionsbyFilterAndIds = _getQuotesOptionsFilter(
    _axios
  )(credentials);
  quotesOptionsFilter.byIds = _getQuotesOptionsByIds(_axios)(credentials);
  return quotesOptionsFilter as QuotesOptionsbyFilterAndIds;
};
