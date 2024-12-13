import { CountriesData } from '@root/types';

import { ApolloError } from '@apollo/client';

export interface TourListProps {
  countriesData?: CountriesData;
  isLoading: boolean;
  isError?: ApolloError;
  maxItems: number;
}
