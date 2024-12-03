import { QueryApiNamesEnum } from '@root/types';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

const roomsLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const countriesLink = new HttpLink({
  uri: 'https://countries.trevorblades.com',
  fetchOptions: { cache: 'no-store' },
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.split(
      (operation) => operation.getContext().apiName === QueryApiNamesEnum.rooms,
      roomsLink,
      countriesLink,
    ),
  });
});
