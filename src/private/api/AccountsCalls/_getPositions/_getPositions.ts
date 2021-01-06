import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  ClientProxyHandler,
  Credentials,
  IPosition,
  IPositions,
} from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getPositions
/** _getPositions */
export const _getPositions = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (): Promise<IPosition[]> => {
  try {
    const positions = await _axiosAccountGetApi(
      credentials,
      proxy,
    )<IPositions>('/positions')();

    return positions.positions;
  } catch (error) {
    void errorlog(error);
    return [];
  }
};
