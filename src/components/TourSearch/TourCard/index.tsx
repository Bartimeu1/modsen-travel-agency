import { useTranslations } from 'next-intl';

import { MotionArticle } from '@components/Motion';

import { CountryFlag } from '@root/constants';

import { TourItemProps } from './types';

import styles from './styles.module.scss';
export const TourCard = (props: TourItemProps) => {
  const { name, currency, languages } = props;

  const t = useTranslations('Tour.TourCard');

  const mainLanguage = languages[0];

  return (
    <MotionArticle
      className={styles.tourCard}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <p className={styles.currency}>
        {t('currency')} - {currency}
      </p>
      <div className={styles.cardFlag}>
        <CountryFlag />
      </div>
      <div className={styles.cardBottomer}>
        <div className={styles.cardInfo}>
          <h5>{name}</h5>
          {mainLanguage && <p>{mainLanguage.name}</p>}
        </div>
        <button>{t('button')}</button>
      </div>
    </MotionArticle>
  );
};
