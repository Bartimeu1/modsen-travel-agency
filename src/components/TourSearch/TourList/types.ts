import { CountriesData } from '@root/types';

import { ApolloError } from '@apollo/client';

export interface TourListProps {
  countriesData: CountriesData | undefined;
  isLoading: boolean;
  isError: ApolloError | undefined;
  maxItems: number;
}
