import { IFormFieldProps } from './types';
import { FormField } from './';

import { render } from '@testing-library/react';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const MOCKED_PROPS: IFormFieldProps = {
  errorText: 'mocked error text',
  children: 'mocked children',
};

describe('FormField component', () => {
  it('Component should render correctly', () => {
    const { getByTestId } = render(<FormField {...MOCKED_PROPS} />);
    const formField = getByTestId('form-field');

    expect(formField).toBeInTheDocument();
  });

  it('renders the error text when provided', () => {
    const { getByText } = render(<FormField {...MOCKED_PROPS} />);

    expect(getByText(MOCKED_PROPS.errorText)).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<FormField {...MOCKED_PROPS} />);

    expect(getByText(MOCKED_PROPS.children as string)).toBeInTheDocument();
  });
});
