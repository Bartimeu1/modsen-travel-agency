import { sendSubscribeMail } from '@root/services';
import { ToastTypesEnum } from '@root/types';

import { SubscribeForm } from './';

import { fireEvent,render, waitFor } from '@testing-library/react';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

jest.mock('../../services', () => ({
  sendSubscribeMail: jest.fn(),
}));

describe('SubscribeForm Component', () => {
  it('should render correctly', () => {
    render(<SubscribeForm />);
  });

  it('renders the form with an input and a button', () => {
    const { getByTestId } = render(<SubscribeForm />);

    expect(getByTestId('subscribe-email')).toBeInTheDocument();
    expect(getByTestId('subscribe-submit')).toBeInTheDocument();
  });

  it('submits the form successfully with a valid email', async () => {
    const validEmail = 'test@example.com';

    const { getByTestId, getByText } = render(<SubscribeForm />);

    const emailInput = getByTestId('subscribe-email');
    const submitButton = getByTestId('subscribe-submit');

    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(sendSubscribeMail).toHaveBeenCalledWith({ email: validEmail });
      expect(getByText(ToastTypesEnum.success)).toBeInTheDocument();
    });
  });

  it('shows validation error when submitting with an invalid email', async () => {
    const { getByTestId, getByText } = render(<SubscribeForm />);

    const submitButton = getByTestId('subscribe-submit');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('fieldRequired')).toBeInTheDocument();
    });

    const emailInput = getByTestId('subscribe-email');

    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('invalidEmail')).toBeInTheDocument();
      expect(getByText(ToastTypesEnum.error)).toBeInTheDocument();
    });
  });

  it('resets the form and shows a success toast on successful submission', async () => {
    const validEmail = 'test@example.com';

    const { getByTestId, getByText } = render(<SubscribeForm />);

    const emailInput = getByTestId('subscribe-email');
    const submitButton = getByTestId('subscribe-submit');

    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailInput).toHaveValue('');
      expect(getByText(ToastTypesEnum.success)).toBeInTheDocument();
    });
  });
});
