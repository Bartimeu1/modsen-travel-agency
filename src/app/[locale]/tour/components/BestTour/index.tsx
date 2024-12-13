import { useTranslations } from 'next-intl';

import { MotionDiv } from '@components/Motion';

import styles from './styles.module.scss';

export const BestTour = () => {
  const t = useTranslations('Tour.BestTour');

  return (
    <section className={styles.bestTour}>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>{t('title')}</h2>
      </MotionDiv>
    </section>
  );
};
