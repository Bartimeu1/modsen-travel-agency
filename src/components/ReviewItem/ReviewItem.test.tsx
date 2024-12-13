import { StaticImageData } from 'next/image';

import { ReviewItemProps } from './types';
import { ReviewItem } from './';

import { render } from '@testing-library/react';

const MOCKED_STATIC_IMAGE = {
  src: '/mocked-image-src',
  height: 100,
  width: 100,
  blurDataURL: 'mocked-blur-data-url',
} as unknown as StaticImageData;

const MOCKED_PROPS: ReviewItemProps = {
  rating: 5,
  date: 'mocked date',
  text: 'mocked text',
  userName: 'mocked userName',
  userAvatar: MOCKED_STATIC_IMAGE,
};

describe('ReviewItem Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<ReviewItem {...MOCKED_PROPS} />);
    const reviewItem = getByTestId('review-item');

    expect(reviewItem).toBeInTheDocument();
  });
});
