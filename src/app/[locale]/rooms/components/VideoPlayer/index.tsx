'use client';

import { useRef, useState } from 'react';
import classNames from 'classnames';

import { PauseButtonIcon, PlayButtonIcon } from '@root/constants';

import styles from './styles.module.scss';

import videoPoster from '@assets/images/videoPoster.webp';

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const onPlayButtonClick = () => {
    if (videoRef.current) {
      const currentVideoRef = videoRef.current;

      if (isVideoPlaying) {
        currentVideoRef.pause();
      } else {
        currentVideoRef.play();
      }
      setIsVideoPlaying((prevState) => !prevState);
    }
  };

  return (
    <section className={styles.videoPlayer}>
      <video
        ref={videoRef}
        className={styles.videoContent}
        poster={videoPoster.src}
        src="/videos/roomsVideo.webm"
        preload="none"
        loop
      />
      <button
        onClick={onPlayButtonClick}
        className={classNames(styles.playButton, {
          [styles.isActive]: isVideoPlaying,
        })}
      >
        {isVideoPlaying ? <PauseButtonIcon /> : <PlayButtonIcon />}
      </button>
    </section>
  );
};
