import { DateRange, IAccount, IAccountActivity, IBalances, ICandle, IExecution, IMarket, IOptionChain, IOptionsQuote, IOrder, IPosition, IQuote, IStrategiesQuotes, ISymbol, ISymbolSearchResult, OptionsFilters, QtApiMyBalances, StrategyVariantRequest } from '../typescript';
export interface IQuestradeAPIv2_0 {
    account: {
        currentAccount: string;
        getActivities(startTime: string): (endTime: string) => Promise<IAccountActivity[]>;
        getAllAccounts(): Promise<IAccount[]>;
        getBalances(): Promise<IBalances>;
        getExecutions(startTime: string): (endTime: string) => Promise<IExecution[]>;
        getOrders(stateFilter?: string | undefined): DateRange<Promise<IOrder[]>>;
        getOrdersByIds(orderId: number[]): Promise<IOrder[]>;
        getPositions(): Promise<IPosition[]>;
        getServerTime(): Promise<Date>;
    };
    getOptionChains: {
        byStockId(stockId: number): Promise<IOptionChain[]>;
    };
    getOptionsQuotes: {
        byOptionsIds(optionIds: number[]): Promise<IOptionsQuote[]>;
        fromFilter(filters: OptionsFilters): Promise<IOptionsQuote[]>;
    };
    getQuotes: {
        byStockIds(ids: number[]): Promise<IQuote[]>;
        byStrategies(strategyVariantRequestData: StrategyVariantRequest): Promise<IStrategiesQuotes>;
    };
    getSymbols: {
        byStockIds(stockIds: number[]): Promise<ISymbol[]>;
    };
    market: {
        getAllMarkets(): Promise<IMarket[]>;
        getCandlesByStockId(symbolID: number): (interval?: string | undefined) => DateRange<Promise<ICandle[]>>;
    };
    myBalances: QtApiMyBalances;
    search: {
        allStocks(prefix: string, offset?: number | undefined): Promise<ISymbolSearchResult[]>;
        countResults(prefix: string): Promise<number>;
        stock(prefix: string, offset?: number | undefined): Promise<ISymbolSearchResult[]>;
    };
    serverTime: Date | 'ERROR';
}
//# sourceMappingURL=IQuestradeAPIv2_0.d.ts.map