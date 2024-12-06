'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useWindowResize } from '@root/hooks';

import 'swiper/css/thumbs';

import { BASE_REVIEW_SLIDES, SLIDER_HORIZONTAL_BREAKPOINT } from './constants';
import { OverviewSliderProps, SwiperDirectionEnum } from './types';

import 'swiper/css';
import styles from './styles.module.scss';

export const OverviewSlider = ({ banner }: OverviewSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { width } = useWindowResize();

  const overviewSlides = [{ id: 1, imgSrc: banner }, ...BASE_REVIEW_SLIDES];
  const { horizontal, vertical } = SwiperDirectionEnum;
  const thumbnailDirection =
    width > SLIDER_HORIZONTAL_BREAKPOINT ? vertical : horizontal;

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        onSwiper={setThumbsSwiper}
        direction={thumbnailDirection}
        slidesPerView={4}
        spaceBetween={10}
        className={styles.thumbnailSlider}
        breakpoints={{
          450: {
            spaceBetween: 30,
          },
        }}
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
