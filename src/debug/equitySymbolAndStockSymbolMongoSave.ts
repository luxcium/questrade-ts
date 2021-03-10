import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../typescript';
import { equitySymbolResultMongoSave } from './equitySymbolResultMongoSave';
import { stockSymbolMongoSave } from './stockSymbolMongoSave';

//   symbolItems.map(async symbItem => {
//     const symbId = symbItem?.symbolId || 0;
//     const stockIds = [symbId];
//     const symbol = await qtApi.getSymbols.byStockIds(stockIds);
//     await equitySymbolResultMongoSave(apiCallQ)(symbItem);
//     await stockSymbolMongoSave(apiCallQ)(symbol);
//   }),
// );
// config = { Model: EquitySymbolResult, value: symbItem };
// await apiCallQ.addToQueue({
//   config,
//   fn: saveMongo,
// });
// await Promise.all(
//   symbol.map(async (uniqueSymbol: ISymbol) => {
//     config = { Model: StockSymbol, value: uniqueSymbol };
//     await apiCallQ.addToQueue({
//       config,
//       fn: saveMongo,
//     });
//     return uniqueSymbol;
//   }),
// );
// return symbolId;

export function searchAndStockSymbolDbSave(qtApi: IQuestradeAPIv2_0) {
  return (apiCallQ: SimpleQueue) => (symbolItems: IEquitySymbol[]) => {
    return symbolItems.map(async symbItem => {
      const symbId = symbItem?.symbolId || 1;
      const stockIds = [symbId];
      const symbol = await qtApi.getSymbols.byStockIds(stockIds);
      await equitySymbolResultMongoSave(apiCallQ)(symbItem);
      await stockSymbolMongoSave(apiCallQ)(symbol);
    });
  };
}