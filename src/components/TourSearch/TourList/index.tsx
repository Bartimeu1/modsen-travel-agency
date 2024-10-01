import { useTranslations } from 'next-intl';

import { Loader } from '@components/Loader';

import { getLimitedElements } from '@root/utils/get-limited-elements';

import { TourCard } from '../TourCard';

import { TourListProps } from './types';

import styles from './styles.module.scss';

export const TourList = (props: TourListProps) => {
  const { countriesData, isError, isLoading, maxItems } = props;

  const t = useTranslations('Tour.TourList');

  const countries = countriesData?.countries;
  const { infoText, countriesList } = styles;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p className={infoText}>{t('errorText')}</p>;
  }

  if (countries && !countries.length) {
    return <p className={infoText}>{t('nothingFoundText')}</p>;
  }

  return (
    <div className={countriesList}>
      {countries &&
        getLimitedElements(countries, maxItems).map(
          ({ id, name, currency, languages }) => (
            <TourCard
              key={id}
              name={name}
              currency={currency}
              languages={languages}
            />
          ),
        )}
    </div>
  );
};
