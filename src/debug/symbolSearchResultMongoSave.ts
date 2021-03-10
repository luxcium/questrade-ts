import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { SymbolSearchResult } from '../schema/symbol-search-result';
import { IEquitySymbol } from '../typescript';
import { saveMongo } from './saveMongo';


export function symbolSearchResultMongoSave(apiCallQ: SimpleQueue) {
  return async (symbItem: IEquitySymbol) => {
    const config = { Model: SymbolSearchResult, value: symbItem };

    await apiCallQ.addToQueue({
      config,
      fn: saveMongo,
    });

    return void 0;
  };
}
