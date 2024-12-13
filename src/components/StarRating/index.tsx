import classNames from 'classnames';

import { StarIcon } from '@root/constants';

import { StarRatingProps } from './types';

import styles from './styles.module.scss';

export const StarRating = ({
  maxRating,
  rating,
  className,
}: StarRatingProps) => {
  return (
    <div
      className={classNames(styles.starRating, className)}
      data-testid="star-rating"
    >
      {Array.from({ length: maxRating }, (_, index) => (
        <StarIcon
          key={index}
          className={classNames({ [styles.filled]: rating > index })}
          data-testid="star-icon"
        />
      ))}
    </div>
  );
};
