import { StarRatingProps } from './types';
import { StarRating } from './';

import { render } from '@testing-library/react';

const MOCKED_PROPS: StarRatingProps = {
  maxRating: 5,
  rating: 5,
};

describe('StarRating Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<StarRating {...MOCKED_PROPS} />);
    const starRating = getByTestId('star-rating');

    expect(starRating).toBeInTheDocument();
  });

  it('handles maximum rating correctly', () => {
    const { getAllByTestId } = render(<StarRating {...MOCKED_PROPS} />);

    const stars = getAllByTestId('star-icon');
    expect(stars).toHaveLength(5);

    stars.forEach((star) => {
      expect(star).toHaveClass('filled');
    });
  });

  it('handles zero rating correctly', () => {
    const { getAllByTestId } = render(
      <StarRating {...MOCKED_PROPS} rating={0} />,
    );

    const stars = getAllByTestId('star-icon');
    stars.forEach((star) => {
      expect(star).not.toHaveClass('filled');
    });
  });
});
