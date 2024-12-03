'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/thumbs';

import { BASE_REVIEW_SLIDES } from './constants';

import 'swiper/css';
import styles from './styles.module.scss';

interface OverviewSliderProps {
  banner: string;
}

export const OverviewSlider = ({ banner }: OverviewSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const overviewSlides = [{ id: 1, imgSrc: banner }, ...BASE_REVIEW_SLIDES];

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={4}
        spaceBetween={30}
        className={styles.thumbnailSlider}
      >
        {overviewSlides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.thumbnailSlide}>
            <Image
              width={0}
              height={0}
              sizes="100%"
              src={slide.imgSrc}
              alt={`Thumbnail ${slide.id}`}
              className={styles.thumbnailImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSlider}
      >
        {overviewSlides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.mainSlide}>
            <Image
              width={0}
              height={0}
              sizes="100%"
              src={slide.imgSrc}
              alt={`Slide ${slide.id}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
