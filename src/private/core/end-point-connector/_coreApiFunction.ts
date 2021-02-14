import { ProxyHandlerOptions } from '../../../resources/side-effects/types';
import { Credentials, Logger, ProxyFactory_ } from '../../../typescript';
import { _httpDataEndPointConnector } from '../XX-http-data-end-point-connector-XX';
import { _coreApiConfig } from './_coreApiConfig';

function _coreApiFunction(
  credentials: Credentials,
  proxy?: ProxyFactory_,
  errorlog: Logger = (...error: any[]) => error,
) {
  // ~~>
  return (VERB: 'GET' | 'POST') => {
    // ~~>
    return <D>(postData: D | null) => {
      // ~~>
      return <R>(
        endpoint: string,
        handlerOptions: ProxyHandlerOptions /* = {} */,
      ) => {
        // ~~>
        return async (): Promise<R> => {
          // ->
          const configBuilder = _coreApiConfig(credentials);
          // ->
          const getEndPoint = configBuilder(VERB);
          // ->
          const endPoint = getEndPoint(endpoint);
          // ->
          const getDataConfig = endPoint(postData);
          // ->
          const clientDataGetter = _httpDataEndPointConnector<R>(
            getDataConfig,
            credentials,
            proxy,
          );

          // ->
          void handlerOptions;

          return clientDataGetter(errorlog, handlerOptions); // from _tryToGetData...
        };
      };
    };
  };
}

export { _coreApiFunction };
