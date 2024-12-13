'use client';

import { QueryApiNamesEnum } from '@root/types';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

const countriesLink = new HttpLink({
  uri: 'https://countries.trevorblades.com',
  fetchOptions: { cache: 'no-store' },
});

const roomsLink = new HttpLink({
  uri: 'https://rooms-graphql.vercel.app/graphql',
});

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.split(
      (operation) => operation.getContext().apiName === QueryApiNamesEnum.rooms,
      roomsLink,
      countriesLink,
    ),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
