import { IMarket } from '../../../../typescript';

export const market: IMarket = {
  name: 'TSX',
  tradingVenues: [
    'TSX',
    'ALPH',
    'CXC',
    'OMGA',
    'PURE',
    'CNSX',
    'ATS',
    'ICX',
    'LIQ',
    'LYX',
    'CXD',
    'NEOL',
    'NEO',
    'MATCH',
    'CX2',
  ],
  defaultTradingVenue: 'AUTO',
  primaryOrderRoutes: ['AUTO'],
  secondaryOrderRoutes: [
    'TSX',
    'AUTO',
    'CX2',
    'AQN',
    'AQL',
    'CXC',
    'OME',
    'OM2',
    'CXD',
  ],
  level1Feeds: ['TSX'],
  level2Feeds: ['ALPH', 'CXC', 'NEO', 'NEOL', 'OMGA', 'PURE', 'TSX'],
  extendedStartTime: '2019-10-07T07:00:00.000000-04:00',
  startTime: '2019-10-07T09:30:00.000000-04:00',
  endTime: '2019-10-07T16:00:00.000000-04:00',
  extendedEndTime: '2019-10-07T20:00:00.000000-04:00',
  snapQuotesLimit: 2_147_483_647,
};
