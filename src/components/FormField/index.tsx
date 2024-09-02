import { useTranslations } from 'next-intl';

import { IFormFieldProps } from './types';

import styles from './styles.module.scss';

export const FormField = (props: IFormFieldProps) => {
  const { children, errorText } = props;

  const t = useTranslations('Validation');

  return (
    <div className={styles.formField}>
      {children}
      {errorText && <p className={styles.errorText}>{t(errorText)}</p>}
    </div>
  );
};
