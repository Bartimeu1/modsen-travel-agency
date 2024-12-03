import classNames from 'classnames';

import { LoaderIcon } from '@root/constants';

import { LoaderProps } from './types';

import styles from './styles.module.scss';

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(styles.loader, className)}>
      <LoaderIcon />
    </div>
  );
};
