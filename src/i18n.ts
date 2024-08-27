import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { localizationItems } from './constants';

const locales = [localizationItems.en, localizationItems.ru];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
