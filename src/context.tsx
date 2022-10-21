import { GraphQLClient, Variables } from 'graphql-request';
import * as React from 'react';
import { SWRConfig, SWRConfiguration } from 'swr';

interface ICollectiveContext {
  client: GraphQLClient;
  fetcher: SWRConfiguration['fetcher'];
}

export const CollectiveContext = React.createContext<ICollectiveContext | undefined>(undefined);
CollectiveContext.displayName = 'CollectiveContext';

interface ICollectiveConfig {
  apiUrl: string;
  swrConfiguration?: Omit<SWRConfiguration, 'fetcher'>;
}

export const CollectiveConfig = (props: React.PropsWithChildren<ICollectiveConfig>) => {
  const { apiUrl, children, swrConfiguration } = props;

  const client = React.useMemo(() => new GraphQLClient(apiUrl), [apiUrl]);
  const fetcher = React.useMemo(
    () => (query: string, variables: Variables) => client.request(query, variables),
    [client]
  );

  return (
    <CollectiveContext.Provider value={{ client, fetcher }}>
      <SWRConfig value={swrConfiguration}>{children}</SWRConfig>
    </CollectiveContext.Provider>
  );
};

export function useCollective() {
  const context = React.useContext(CollectiveContext);

  if (context === undefined) {
    throw new Error(`useCollective must be used within an CollectiveConfig`);
  }

  return context;
}
