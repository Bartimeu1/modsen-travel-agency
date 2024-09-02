import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { SubscribeForm } from '@components/SubcribeForm';

import { footerNavLinks } from './config';

import styles from './styles.module.scss';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.footerTopper)}>
        <div className={styles.infoText}>
          <h3>{t('infoTitle')}</h3>
          <p>{t('infoText')}</p>
        </div>
        <nav className={styles.footerNav}>
          {footerNavLinks.map(({ id, key, links }) => (
            <div key={id} className={styles.navBlock}>
              <h5>{t(`navigation.titles.${key}`)}</h5>
              {links.map(({ id, key, href }) => (
                <Link
                  key={id}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t(`navigation.links.${key}`)}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <SubscribeForm />
      </div>
      <div className={styles.footerBottomer}>
        <p>Paradise view 2024</p>
      </div>
    </footer>
  );
};
