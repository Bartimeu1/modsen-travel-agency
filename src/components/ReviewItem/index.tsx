import Image from 'next/image';

import { StarRating } from '@components/StarRating';

import { QuoteEnd, QuoteStart } from '@root/constants';

import { ReviewItemProps } from './types';

import styles from './styles.module.scss';

export const ReviewItem = (props: ReviewItemProps) => {
  const { text, userAvatar, userName, date, rating } = props;

  return (
    <article className={styles.reviewItem}>
      <div className={styles.reviewTopper}>
        <p>{date}</p>
        <StarRating
          maxRating={5}
          rating={rating}
          className={styles.reviewRating}
        />
      </div>
      <div className={styles.reviewContent}>
        <p>
          <QuoteStart className={styles.quoteStart} />
          {text}
          <QuoteEnd className={styles.quoteEnd} />
        </p>
      </div>
      <div className={styles.reviewerInfo}>
        <Image src={userAvatar} alt="userAvatar" />
        <p>{userName}</p>
      </div>
    </article>
  );
};
