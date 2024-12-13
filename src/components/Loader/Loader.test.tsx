import { Loader } from './';

import { render } from '@testing-library/react';

describe('Loader Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId('loader');

    expect(loader).toBeInTheDocument();
  });
});
