import { GetSymbolItemsList } from '../../typescript';
import { mapping, promiseOf } from '../../utils';
import { EquityMapper } from './EquityMapper';

export const getIdsAndSymbolsList: GetSymbolItemsList = async ({
  equityList,
}) => {
  const equityList_ = promiseOf(equityList);

  const mapper: EquityMapper = item => {
    const symbolItems = item;
    const [symbolItem] = symbolItems;
    const symbolId = symbolItem?.symbolId || 1;

    return {
      symbolId,
      symbolItem,
      symbolItems,
    };
  };

  return mapping({
    list: equityList_,
    mapper,
  });
};

