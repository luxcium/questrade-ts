import { AxiosStatic, default as axios } from 'axios';
import { _axiosAccountGetApi } from '../../..';
import { endpointFormatDateTool } from '../../../../../utils';
import { IAccountActivity, IActivities } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
export const _getActivities = (_axios: AxiosStatic = axios) => {
  //
  return (credentials: Credentials) => {
    //
    return (startTime: string) => {
      //
      return async (endTime: string): Promise<IAccountActivity[]> => {
        //
        const axiosAccountGetApi = _axiosAccountGetApi(_axios);
        const accountGetApi = axiosAccountGetApi(credentials);
        //
        const dateTime = endpointFormatDateTool(startTime, endTime);
        const endpoint = `/activities?${dateTime}`;
        //
        const accountGet = accountGetApi<IActivities>(endpoint);
        const activities = await accountGet();
        //
        return activities.activities;
        //
      };
    };
  };
};
