'use client';

import { useState } from 'react';
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

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const handleBurgerMenuToggle = () => {
    setIsBurgerActive((prevState) => !prevState);
  };

  return (
    <header className={styles.header} data-testid="header">
      <div className={classNames('container', styles.headerContainer)}>
        <Link href={routes.home} className={styles.logoLink}>
          <LogoIcon />
        </Link>
        <div
          className={classNames(styles.headerControls, {
            [styles.mobileActive]: isBurgerActive,
          })}
        >
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
        <button
          onClick={handleBurgerMenuToggle}
          className={classNames(styles.burgerMenu, {
            [styles.active]: isBurgerActive,
          })}
          data-testid="burger-button"
        >
          <span className={styles.burgerRow} />
        </button>
      </div>
    </header>
  );
};
