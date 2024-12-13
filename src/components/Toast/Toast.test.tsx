import { ToastTypesEnum } from '@root/types';

import { IToastProps } from './types';
import { Toast } from './';

import { render } from '@testing-library/react';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const MOCKED_PROPS: IToastProps = {
  type: ToastTypesEnum.success,
  closeToast: jest.fn(),
};

describe('Toast Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Toast {...MOCKED_PROPS} />);
    const toast = getByTestId('app-toast');

    expect(toast).toBeInTheDocument();
  });

  it('should display valid success text', () => {
    const { getByText } = render(<Toast {...MOCKED_PROPS} />);

    expect(getByText('success')).toBeInTheDocument();
  });

  it('should display valid error text', () => {
    const { getByText } = render(
      <Toast {...MOCKED_PROPS} type={ToastTypesEnum.error} />,
    );

    expect(getByText('error')).toBeInTheDocument();
  });
});
