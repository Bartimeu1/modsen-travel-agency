import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';

import { Banner } from '@components/Banner';

import { GET_ROOM_BY_ID, GET_ROOMS_IDS } from '@root/graphql/queries';
import { query } from '@root/lib/ApolloClient';
import { locales } from '@root/navigation';
import { RoomByIdResponse, RoomsIdsResponse } from '@root/types';
import { QueryApiNamesEnum } from '@root/types';

import { RoomOverview } from './components/RoomOverview';
import { RoomPageProps } from './types';

import styles from './styles.module.scss';

export async function generateStaticParams() {
  const { data } = await query<RoomsIdsResponse>({
    query: GET_ROOMS_IDS,
    context: {
      apiName: QueryApiNamesEnum.rooms,
    },
  });

  return locales.flatMap((locale) =>
    data.roomsIds.map((id) => ({
      slug: id,
      locale,
    })),
  );
}

const RoomPage = async ({ params }: RoomPageProps) => {
  const { id, locale } = await params;

  unstable_setRequestLocale(locale);

  const t = await getTranslations('Room');

  const { data } = await query<RoomByIdResponse>({
    query: GET_ROOM_BY_ID,
    context: {
      apiName: QueryApiNamesEnum.rooms,
    },
    variables: {
      id,
    },
  });

  return (
    <>
      <Banner title={t('Banner.title')} className={styles.roomBanner} />
      <RoomOverview {...data.roomById} />
    </>
  );
};

export default RoomPage;
