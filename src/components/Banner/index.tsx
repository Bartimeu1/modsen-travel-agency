import classNames from 'classnames';

import { MotionDiv } from '../Motion';

import { BannerProps } from './types';

import styles from './styles.module.scss';

export const Banner = (props: BannerProps) => {
  const { title, subtitle, className } = props;

  return (
    <section
      className={classNames(styles.banner, className)}
      data-testid="banner"
    >
      <MotionDiv
        className={classNames('container', styles.bannerContainer)}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </MotionDiv>
    </section>
  );
};
