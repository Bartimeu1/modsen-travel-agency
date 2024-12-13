import { localizationItems } from '@root/constants';

import { LocalizationSwitcher } from './';

import { fireEvent, render } from '@testing-library/react';

jest.mock('@/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => '/mock-pathname'),
  useParams: jest.fn(() => {}),
}));

jest.mock('next-intl', () => ({
  useLocale: jest.fn(() => localizationItems.en),
}));

jest.mock('./constants', () => ({
  localizationFlags: {
    en: 'en',
    fr: 'fr',
    es: 'es',
  },
}));

describe('LocalizationSwitcher component', () => {
  it('Component should render correctly', () => {
    const { getByTestId } = render(<LocalizationSwitcher />);
    const localizationSwitcher = getByTestId('localization-switcher');

    expect(localizationSwitcher).toBeInTheDocument();
  });

  it('opens locale menu on locale button click', () => {
    const { getByTestId, getAllByTestId } = render(<LocalizationSwitcher />);

    const localeButton = getByTestId('locale-button');
    fireEvent.click(localeButton);

    expect(getAllByTestId('locale-item')).toHaveLength(3);
  });

  it('highlights current locale', () => {
    const { getByTestId, getAllByTestId } = render(<LocalizationSwitcher />);

    const localeButton = getByTestId('locale-button');
    fireEvent.click(localeButton);

    const localeItems = getAllByTestId('locale-item');
    expect(localeItems[0]).toHaveClass('target');
  });
});
