import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { ImageWithSkeletonProps } from './types';

import styles from './styles.module.scss';

export const ImageWithSkeleton = ({
  className,
  ...props
}: ImageWithSkeletonProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const onImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <>
      {isImageLoading && <div className={styles.skeleton}></div>}
      <Image
        onLoadingComplete={onImageLoad}
        className={classNames(className, { [styles.hidden]: isImageLoading })}
        {...props}
      />
    </>
  );
};
