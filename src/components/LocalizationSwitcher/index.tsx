'use client';

import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';

import { useOnClickOutside } from '@root/hooks/use-on-click-outside';
import { usePathname, useRouter } from '@root/navigation';

import { localizationFlags } from './constants';
import { PossibleLocales } from './types';

import styles from './styles.module.scss';

export const LocalizationSwitcher = () => {
  const locale = useLocale() as PossibleLocales;
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const localeSelectRef = useRef(null);
  const [isLocaleSelection, setIsLocaleSelection] = useState(false);

  const onChangeLocale = (locale: PossibleLocales) => () => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known params
      // are used in combination with a given pathname. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      {
        locale: locale,
      },
    );
  };

  const onSelectionButtonClick = () => {
    setIsLocaleSelection((prevState) => !prevState);
  };

  const onSelectOutsideClick = () => {
    setIsLocaleSelection(false);
  };

  useOnClickOutside(localeSelectRef, onSelectOutsideClick);

  return (
    <div
      className={styles.localeSwitcher}
      ref={localeSelectRef}
      data-testid="localization-switcher"
    >
      <button onClick={onSelectionButtonClick} data-testid="locale-button">
        {localizationFlags[locale]}
      </button>
      {isLocaleSelection && (
        <div className={styles.localeSelect}>
          {Object.entries(localizationFlags).map(([key, flag]) => (
            <button
              key={key}
              onClick={onChangeLocale(key as PossibleLocales)}
              className={classNames(styles.localeSelectButton, {
                [styles.target]: key === locale,
              })}
              data-testid="locale-item"
            >
              {flag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
