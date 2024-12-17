import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

import { locales } from '@root/navigation';

/* TODO: Remove this layout when next-intl updates its logic of working with SSG */

interface RoomsLayoutProps {
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RoomsLayout({
  children,
  params: { locale },
}: PropsWithChildren<RoomsLayoutProps>) {
  if (!locales.includes(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  return <>{children}</>;
}
