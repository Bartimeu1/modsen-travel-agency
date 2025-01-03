'use client';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MotionDiv } from '@components/Motion';
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
        <MotionDiv
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            watchOverflow
            navigation={{
              prevEl: `.${styles.prevButton}`,
              nextEl: `.${styles.nextButton}`,
              disabledClass: styles.disabled,
            }}
            breakpoints={{
              880: {
                slidesPerView: 2,
              },
              1150: {
                slidesPerView: 3,
              },
            }}
          >
            {reviewsItems.map(({ id, ...reviewInfo }) => (
              <SwiperSlide key={id} className={styles.reviewSlide}>
                <ReviewItem {...reviewInfo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionDiv>
      </div>
    </section>
  );
};
