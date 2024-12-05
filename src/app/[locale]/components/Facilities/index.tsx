import { useTranslations } from 'next-intl';

import { MotionArticle } from '@components/Motion';

import { facilityItems } from './config';

import styles from './styles.module.scss';

export const Facilities = () => {
  const t = useTranslations('Home.Facilities');

  return (
    <section className={styles.facilities}>
      <div className="container">
        <div className={styles.facilitiesHeading}>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>
        <div className={styles.facilitiesList}>
          {facilityItems.map(({ id, textKey, icon }) => (
            <MotionArticle
              key={id}
              className={styles.facilitiesItem}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
            >
              {icon}
              <p>{t(`items.${textKey}`)}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
};
