import { ReactNode } from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import { getFontsClasses } from '@utils/get-fonts-classes';

import { baseFonts } from '@root/constants';
import { ApolloWrapper } from '@root/lib/ApolloWrapper';

import '@styles/index.scss';

export const metadata = {
  title: 'Modsen Travel Agency',
  description: 'Best travel agency right here',
};

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={getFontsClasses(baseFonts)}>
        <ApolloWrapper>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
