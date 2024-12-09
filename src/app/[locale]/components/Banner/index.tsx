import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { MotionSection } from '@components/Motion';
import { BookingPlate } from '@components/QuickBooking';

import { PlayIcon, routes } from '@root/constants';

import styles from './styles.module.scss';
export const Banner = () => {
  const t = useTranslations('Home.Banner');

  return (
    <MotionSection
      className={styles.banner}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={classNames('container', styles.bannerContainer)}>
        <div className={styles.bannerContent}>
          <h3>{t('company')}</h3>
          <h1>{t('title')}</h1>
          <p className={styles.bannerSubtitle}>{t('subtitle')}</p>
          <Link
            href={routes.tour}
            className={styles.tourLink}
            data-testid="tour-button"
          >
            <button className={styles.tourButton}>
              <PlayIcon />
            </button>
            <p>{t('tourButton')}</p>
          </Link>
        </div>
        <BookingPlate />
      </div>
    </MotionSection>
  );
};
