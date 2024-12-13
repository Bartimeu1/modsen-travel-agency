import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { IFormFieldProps } from './types';

import styles from './styles.module.scss';

export const FormField = (props: IFormFieldProps) => {
  const { children, errorText, className } = props;

  const t = useTranslations('Validation');

  return (
    <div
      className={classNames(styles.formField, className)}
      data-testid="form-field"
    >
      {children}
      {errorText && <p className={styles.errorText}>{t(errorText)}</p>}
    </div>
  );
};
