import {
  Credentials,
  IExecution,
  IExecutions,
  IProxy,
} from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../routes';

// + _getExecutions
/** _getExecutions */
export const _getExecutions = (credentials: Credentials, proxy?: IProxy) => (
  startDate: string
) => async (endDate: string): Promise<IExecution[]> => {
  try {
    const executions = await _axiosAccountGetApi(
      credentials,
      proxy
    )<IExecutions>(
      `/executions?${endpointFormatDateTool(startDate, endDate)}`
    )();
    return executions.executions;
  } catch (error) {
    console.error(error);
    return [];
  }
};
