import { BookingModalProps } from './types';
import { BookingModal } from './';

import { act, fireEvent,render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const MOCKED_PROPS: BookingModalProps = {
  onClose: jest.fn(),
  onSendMail: jest.fn(),
};

describe('BookingModal Component', () => {
  it('should render correctly', () => {
    render(<BookingModal {...MOCKED_PROPS} />);
  });

  test('should call onClose after outside click', async () => {
    render(<BookingModal {...MOCKED_PROPS} />);

    userEvent.click(document.body);

    await waitFor(() => {
      expect(MOCKED_PROPS.onClose).toHaveBeenCalled();
    });
  });

  test('should call the onSubmit function when data is correct', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <BookingModal {...MOCKED_PROPS} />,
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText('namePlaceholder'), {
        target: { value: 'test-name' },
      });
      fireEvent.change(getByPlaceholderText('emailPlaceholder'), {
        target: { value: 'email@test.com' },
      });
    });

    const submitButton = getByTestId('booking-submit');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(MOCKED_PROPS.onSendMail).toHaveBeenCalled();
      expect(MOCKED_PROPS.onClose).toHaveBeenCalled();
    });
  });
});
