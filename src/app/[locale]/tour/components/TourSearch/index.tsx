'use client';
import React, { ChangeEvent, useEffect,useState } from 'react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { TourList } from '@root/components/TourSearch';
import { SearchIcon } from '@root/constants';
import { SEARCH_COUNTRIES } from '@root/graphql/queries';
import { useThrottle } from '@root/hooks';
import { CountriesData } from '@root/types';

import {
  BASE_SEARCH_VALUE,
  MAX_TOUR_LIST_ITEMS,
  SEARCH_THROTTLE_TIME,
} from './constants';

import styles from './styles.module.scss';

import { useLazyQuery } from '@apollo/client';

export const TourSearch = () => {
  const t = useTranslations('Tour.TourSearch');

  const [searchValue, setSearchValue] = useState('');
  const throttledSearchValue = useThrottle(searchValue, SEARCH_THROTTLE_TIME);

  const [
    getCountries,
    { data: countriesData, loading: isLoading, error: isError },
  ] = useLazyQuery<CountriesData>(SEARCH_COUNTRIES);

  useEffect(() => {
    getCountries({
      variables: { search: throttledSearchValue || BASE_SEARCH_VALUE },
    });
  }, [throttledSearchValue]);

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <section>
      <div className={classNames('container', styles.tourSearchContainer)}>
        <div className={styles.topper}>
          <h3>{t('title')}</h3>
          <p>{t('subtitle')}</p>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder={t('placeholder')}
            onChange={onSearchInputChange}
            value={searchValue}
          />
          <SearchIcon />
        </div>
        <TourList
          countriesData={countriesData}
          isLoading={isLoading}
          isError={isError}
          maxItems={MAX_TOUR_LIST_ITEMS}
        />
      </div>
    </section>
  );
};
