import { memo } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { useTimeout } from '@root/hooks';

import { IToastProps } from './types';

import styles from './styles.module.scss';

export const Toast = memo(function Toast(props: IToastProps) {
  const { type, closeToast } = props;

  const t = useTranslations('Toast');

  useTimeout(() => closeToast(), 8000);

  return createPortal(
    <aside className={classNames(styles.toast, styles[type])}>
      <p className={styles.toastText}>{t(type)}</p>
    </aside>,
    document.body,
  );
});
