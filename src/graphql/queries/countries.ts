import { gql } from '@apollo/client';

export const BOOKING_COUNTRIES = gql`
  {
    countries(filter: { code: { in: ["US", "RU", "BY", "GB", "AU", "UA"] } }) {
      id: code
      value: name
    }
  }
`;
