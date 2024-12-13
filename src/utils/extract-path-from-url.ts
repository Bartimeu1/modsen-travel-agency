import { localizationItems } from '@root/constants';

export const extractPathFromURL = (url: string) => {
  const paths = Object.values(localizationItems).map((item) => `/${item}`);
  const basePath = paths.find((item) => url.startsWith(item));

  if (basePath) {
    const targetRoute = url.slice(basePath.length);

    return targetRoute || '/';
  }

  return url;
};
