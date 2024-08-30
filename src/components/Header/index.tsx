'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocalizationSwitcher } from '@root/components/LocalizationSwitcher';
import { LogoIcon, routes } from '@root/constants';
import { usePathname } from '@root/navigation';
import { extractPathFromURL } from '@root/utils/extract-path-from-url';

import { menuLinks } from './constants';

import styles from './styles.module.scss';

export const Header = () => {
  const t = useTranslations('Header');

  const pathName = usePathname();
  const targetRoute = extractPathFromURL(pathName);

  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.headerContainer)}>
        <Link href={routes.home}>
          <LogoIcon />
        </Link>
        <nav className={styles.navMenu}>
          {menuLinks.map(({ id, name, route }) => (
            <Link
              key={id}
              href={route}
              className={classNames(styles.navLink, {
                [styles.target]: targetRoute === route,
              })}
            >
              {t(name)}
            </Link>
          ))}
        </nav>
        <LocalizationSwitcher />
      </div>
    </header>
  );
};
