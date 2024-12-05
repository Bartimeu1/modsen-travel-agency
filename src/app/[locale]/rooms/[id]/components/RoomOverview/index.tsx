import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { MotionDiv } from '@components/Motion';
import { OverviewSlider } from '@components/OverviewSlider';
import { StarRating } from '@components/StarRating';
import { Tooltip } from '@components/Tooltip';

import { Room } from '@root/types';

import styles from './styles.module.scss';

export const RoomOverview = (props: Room) => {
  const { title, price, available, rating, reviews, info, image } = props;

  const t = useTranslations('Room.RoomOverview');

  return (
    <section className={styles.overview}>
      <MotionDiv
        className={classNames('container', styles.overviewContainer)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <OverviewSlider banner={image} />
        <div className={styles.roomContent}>
          <div className={styles.roomInfo}>
            <h2>{title}</h2>
            <p className={styles.roomPrice}>₦{price}</p>
            <div className={styles.roomReviews}>
              <StarRating maxRating={5} rating={rating} />
              <p>
                {reviews} {t('review')}
              </p>
            </div>
            <p className={styles.infoText}>{info}</p>
          </div>
          {!available ? (
            <Tooltip text={t('notAvailable')}>
              <button className={styles.reservationButton} disabled>
                {t('reservation')}
              </button>
            </Tooltip>
          ) : (
            <button className={styles.reservationButton}>
              {t('reservation')}
            </button>
          )}
        </div>
      </MotionDiv>
    </section>
  );
};
