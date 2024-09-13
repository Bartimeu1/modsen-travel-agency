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
    <div className={classNames(styles.starRating, className)}>
      {Array.from({ length: maxRating }, (_, index) => (
        <StarIcon
          key={index}
          className={classNames({ [styles.filled]: rating > index })}
        />
      ))}
    </div>
  );
};
