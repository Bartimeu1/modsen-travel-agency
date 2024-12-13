import { BookingFieldsEnum } from '../BookingPlate/types';

import { BookingItemProps } from './types';
import { BookingItem } from './';

import { render } from '@testing-library/react';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const MOCKED_PROPS: BookingItemProps = {
  name: BookingFieldsEnum.checkIn,
  image: 'mocked image',
  children: 'mocked children',
};

describe('BookingItem Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<BookingItem {...MOCKED_PROPS} />);
    const bookingItem = getByTestId('booking-item');

    expect(bookingItem).toBeInTheDocument();
  });
});
