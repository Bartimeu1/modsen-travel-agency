import { useTranslations } from 'next-intl';

import { BookingItemProps } from './types';

import styles from './styles.module.scss';

export const BookingItem = (props: BookingItemProps) => {
  const { name, image, children } = props;

  const t = useTranslations('Home.BookingPlate');

  return (
    <div className={styles.bookingItem}>
      {image}
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{t(`fields.${name}`)}</p>
        {children}
      </div>
    </div>
  );
};
