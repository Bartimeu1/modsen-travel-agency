import classNames from 'classnames';

import { BannerProps } from './types';

import styles from './styles.module.scss';

export const Banner = (props: BannerProps) => {
  const { title, subtitle, className } = props;

  return (
    <section className={classNames(styles.banner, className)}>
      <div className={classNames('container', styles.bannerContainer)}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
};
