import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const BestTour = () => {
  const t = useTranslations('Tour.BestTour');

  return (
    <section className={styles.bestTour}>
      <h2>{t('title')}</h2>
    </section>
  );
};
