import classNames from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { MotionArticle } from '@components/Motion';

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
            <MotionArticle
              key={id}
              className={styles.roomsItem}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.itemContent}>
                <Image src={image} alt={`room-${code}`} />
                <p>{t(`items.${code}`)}</p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
};
