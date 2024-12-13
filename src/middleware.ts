import createMiddleware from 'next-intl/middleware';

import { localizationItems } from './constants';

const { ru, en } = localizationItems;

export default createMiddleware({
  locales: [en, ru],
  defaultLocale: en,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/([\\w-]+)?/users/(.+)'],
};
