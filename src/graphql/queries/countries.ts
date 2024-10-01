import { gql } from '@apollo/client';

export const BOOKING_COUNTRIES = gql`
  {
    countries(filter: { code: { in: ["US", "RU", "BY", "GB", "AU", "UA"] } }) {
      id: code
      value: name
    }
  }
`;

export const SEARCH_COUNTRIES = gql`
  query GetCountries($search: String) {
    countries(filter: { name: { regex: $search } }) {
      id: code
      name
      currency
      languages {
        name
      }
    }
  }
`;
