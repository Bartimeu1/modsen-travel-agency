import '../../../__mocks__/intersectionObserver';

import { TourItemProps } from './types';
import { TourCard } from './';

import { render } from '@testing-library/react';

const MOCKED_PROPS: TourItemProps = {
  name: 'mocked name',
  currency: 'USD',
  languages: [{ name: 'eng' }],
};

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

describe('TourCard Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<TourCard {...MOCKED_PROPS} />);
    const tourCard = getByTestId('tour-card');

    expect(tourCard).toBeInTheDocument();
  });
});
