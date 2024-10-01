import { LoaderIcon } from '@root/constants';

import styles from './styles.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderIcon />
    </div>
  );
};
