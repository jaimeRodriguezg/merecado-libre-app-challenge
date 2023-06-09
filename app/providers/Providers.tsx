'use client';
import { ReactNode, FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BreadCrumbsProvider } from '../context/Breadcrumbs';
interface Props {
  children: ReactNode;
}

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
  cache: new InMemoryCache(),
});

const Providers: FC<Props> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <BreadCrumbsProvider>{children}</BreadCrumbsProvider>
    </ApolloProvider>
  );
};

export default Providers;
