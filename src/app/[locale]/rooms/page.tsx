import { useTranslations } from 'next-intl';

import { Banner } from '@components/Banner';

import { RoomsPlate } from './components/RoomsPlate';
import { VideoPlayer } from './components/VideoPlayer';

import styles from './styles.module.scss';

const RoomsPage = () => {
  const t = useTranslations('Rooms');

  return (
    <>
      <Banner
        title={t('Banner.title')}
        subtitle={t('Banner.subTitle')}
        className={styles.roomsBanner}
      />
      <VideoPlayer />
      <RoomsPlate />
    </>
  );
};

export default RoomsPage;
