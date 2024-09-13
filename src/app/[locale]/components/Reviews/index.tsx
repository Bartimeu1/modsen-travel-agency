'use client';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReviewItem } from '@components/ReviewItem';

import { SliderNavButton } from '@root/constants';

import { reviewsItems } from './config';

import 'swiper/css';
import styles from './styles.module.scss';

export const Reviews = () => {
  const t = useTranslations('Home.Reviews');

  return (
    <section className={styles.reviews}>
      <div className={classNames('container', styles.reviewsContainer)}>
        <h2>{t('title')}</h2>
        <div className={styles.sliderNavigation}>
          <button className={styles.prevButton}>
            <SliderNavButton />
          </button>
          <button className={styles.nextButton}>
            <SliderNavButton />
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          watchOverflow
          navigation={{
            prevEl: `.${styles.prevButton}`,
            nextEl: `.${styles.nextButton}`,
            disabledClass: styles.disabled,
          }}
        >
          {reviewsItems.map(({ id, ...reviewInfo }) => (
            <SwiperSlide key={id}>
              <ReviewItem {...reviewInfo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
