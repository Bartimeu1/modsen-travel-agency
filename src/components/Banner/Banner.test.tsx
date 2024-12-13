import { BannerProps } from './types';
import { Banner } from './';

import { render } from '@testing-library/react';

const MOCKED_PROPS: BannerProps = {
  title: 'mocked title',
  subtitle: 'mocked subtitle',
};

describe('Banner component', () => {
  it('Component should render correctly', () => {
    const { getByTestId } = render(<Banner {...MOCKED_PROPS} />);

    const banner = getByTestId('banner');
    expect(banner).toBeInTheDocument();
  });
});
