import classNames from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { roomsItems } from './config';

import styles from './styles.module.scss';

export const Rooms = () => {
  const t = useTranslations('Home.Rooms');

  return (
    <section className={styles.rooms}>
      <div className={classNames('container', styles.roomsContainer)}>
        <div className={styles.roomsTopper}>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>
        <div className={styles.roomsList}>
          {roomsItems.map(({ id, code, image }) => (
            <article key={id} className={styles.roomsItem}>
              <div className={styles.itemContent}>
                <Image src={image} alt={`room-${code}`} />
                <p>{t(`items.${code}`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
