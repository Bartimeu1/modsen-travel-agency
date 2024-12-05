'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { MotionDiv } from '@components/Motion';

import { routes } from '@root/constants';

import styles from './styles.module.scss';

const ErrorPage = () => {
  const t = useTranslations('Error');

  return (
    <MotionDiv
      className={styles.error}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h2>{t('title')}</h2>
      <Link href={routes.home}>{t('homeLink')}</Link>
    </MotionDiv>
  );
};

export default ErrorPage;
