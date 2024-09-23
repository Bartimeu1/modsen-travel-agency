import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { BookingPlate } from '@components/QuickBooking';

import { PlayIcon } from '@root/constants';
import { routes } from '@root/constants';

import styles from './styles.module.scss';
export const Banner = () => {
  const t = useTranslations('Home.Banner');

  return (
    <section className={styles.banner}>
      <div className={classNames('container', styles.bannerContainer)}>
        <div className={styles.bannerContent}>
          <h3>{t('company')}</h3>
          <h1>{t('title')}</h1>
          <p className={styles.bannerSubtitle}>{t('subtitle')}</p>
          <Link href={routes.tour} className={styles.tourLink}>
            <button className={styles.tourButton}>
              <PlayIcon />
            </button>
            <p>{t('tourButton')}</p>
          </Link>
        </div>
        <BookingPlate />
      </div>
    </section>
  );
};
