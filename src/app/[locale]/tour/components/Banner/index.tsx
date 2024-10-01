import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { routes } from '@root/constants';

import styles from './styles.module.scss';

export const Banner = () => {
  const t = useTranslations('Tour.Banner');

  return (
    <section className={styles.banner}>
      <div className={classNames('container', styles.bannerContainer)}>
        <div className={styles.bannerContent}>
          <h3>{t('company')}</h3>
          <h1>{t('title')}</h1>
          <p className={styles.bannerSubtitle}>{t('subtitle')}</p>
          <Link href={routes.home} className={styles.tourLink}>
            {t('link')}
          </Link>
        </div>
      </div>
    </section>
  );
};
