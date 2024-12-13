import '../../../__mocks__/intersectionObserver';

import { TourListProps } from './types';
import { TourList } from './';

import { ApolloError } from '@apollo/client';
import { render } from '@testing-library/react';

const MOCKED_ERROR = new ApolloError({
  errorMessage: 'Test error message',
});

const MOCKED_PROPS: TourListProps = {
  countriesData: {
    countries: [
      {
        id: '1',
        name: 'test name',
        currency: 'EUR',
        languages: [{ name: 'english' }],
      },
    ],
  },
  isLoading: false,
  maxItems: 5,
};

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

describe('TourList Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<TourList {...MOCKED_PROPS} />);
    const tourList = getByTestId('tour-list');

    expect(tourList).toBeInTheDocument();
  });

  it('should display valid tour cards amount', () => {
    const { getAllByTestId } = render(<TourList {...MOCKED_PROPS} />);

    expect(getAllByTestId('tour-card')).toHaveLength(1);
  });

  it('should show error text if needed', () => {
    const { getByText } = render(
      <TourList {...MOCKED_PROPS} isError={MOCKED_ERROR} />,
    );

    expect(getByText('errorText')).toBeInTheDocument();
  });

  it('should show loader if needed', () => {
    const { getByTestId } = render(<TourList {...MOCKED_PROPS} isLoading />);

    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('should show "nothing found" text if needed', () => {
    const { getByText } = render(
      <TourList {...MOCKED_PROPS} countriesData={{ countries: [] }} />,
    );

    expect(getByText('nothingFoundText')).toBeInTheDocument();
  });
});
