import { useTranslations } from 'next-intl';

import { facilityItems } from './config';

import styles from './styles.module.scss';

export const Facilities = () => {
  const t = useTranslations('Facilities');

  return (
    <section className={styles.facilities}>
      <div className={styles.facilitiesHeading}>
        <h2>{t('title')}</h2>
        <p>{t('subtitle')}</p>
      </div>
      <div className={styles.facilitiesList}>
        {facilityItems.map(({ id, textKey, icon }) => (
          <div key={id} className={styles.facilitiesItem}>
            {icon}
            <p>{t(`items.${textKey}`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
