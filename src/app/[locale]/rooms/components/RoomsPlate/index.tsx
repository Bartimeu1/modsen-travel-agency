'use client';

import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ImageWithSkeleton } from '@components/ImageWithSkeleton';
import { Loader } from '@components/Loader';

import { BASE_ROOMS_DATA, routes } from '@root/constants';
import { GET_ROOMS } from '@root/graphql/rooms';
import { QueryApiNamesEnum, RoomsData } from '@root/types';

import {
  BASE_DATA_OFFSET,
  ROOM_CONTROLS_ICONS,
  ROOMS_PER_PAGE,
} from './constants';

import styles from './styles.module.scss';

import { useQuery } from '@apollo/client';

export const RoomsPlate = () => {
  const t = useTranslations('Rooms.RoomsPlate');
  const [targetOffset, setTargetOffset] = useState(BASE_DATA_OFFSET);

  const {
    data: roomsData,
    loading: isLoading,
    error: isError,
    fetchMore,
  } = useQuery<RoomsData>(GET_ROOMS, {
    variables: { limit: ROOMS_PER_PAGE, offset: BASE_DATA_OFFSET },
    context: { apiName: QueryApiNamesEnum.rooms },
  });

  const { items: roomsList, totalCount } = roomsData?.rooms || BASE_ROOMS_DATA;
  const hasMoreRoomsData = roomsList.length < totalCount;

  const handleLoadMoreClick = async () => {
    const newDataOffset = targetOffset + ROOMS_PER_PAGE;

    fetchMore({
      variables: { limit: ROOMS_PER_PAGE, offset: newDataOffset },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        const { rooms: previousRoomsData } = prevResult;

        return {
          rooms: {
            ...previousRoomsData,
            items: [...previousRoomsData.items, ...fetchMoreResult.rooms.items],
          },
        };
      },
    });

    setTargetOffset(newDataOffset);
  };

  if (isLoading) {
    return <Loader className={styles.loader} />;
  }

  if (isError) {
    return <p className={styles.infoText}>Error</p>;
  }

  return (
    <section className={styles.roomsPlate}>
      <div className={classNames('container', styles.roomsContainer)}>
        <div className={styles.roomsList}>
          {roomsList?.map(({ id, title, image, price, available }) => (
            <article key={id} className={styles.roomItem}>
              <div className={styles.topper}>
                <ImageWithSkeleton
                  src={image}
                  alt="room-image"
                  width={0}
                  height={0}
                  sizes="100%"
                  className={styles.roomImage}
                />
              </div>
              <div className={styles.roomContent}>
                <div className={styles.roomInfo}>
                  <div>
                    <h4 className={styles.roomTitle}>{title}</h4>
                    <p className={styles.roomPrice}>₦{price}</p>
                  </div>
                  <p className={styles.roomStatus}>
                    {t('available')}: {t(available ? 'yes' : 'no')}
                  </p>
                </div>
                <div className={styles.roomControls}>
                  <div className={styles.controlsIcons}>
                    {ROOM_CONTROLS_ICONS.map((Icon, index) => (
                      <Icon key={index} />
                    ))}
                  </div>
                  <Link
                    className={styles.bookLink}
                    href={`${routes.rooms}/${id}`}
                  >
                    {t('bookButton')}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {hasMoreRoomsData && (
          <button
            className={styles.loadMoreButton}
            onClick={handleLoadMoreClick}
          >
            {t('showMoreButton')}
          </button>
        )}
      </div>
    </section>
  );
};
