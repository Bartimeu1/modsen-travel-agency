import { useTranslations } from 'next-intl';

import { Banner } from '@components/Banner';

import { ContactForm } from './components/ContactForm';
import { Map } from './components/Map';

import styles from './styles.module.scss';

const ContactPage = () => {
  const t = useTranslations('Contact');

  return (
    <>
      <Banner
        title={t('Banner.title')}
        subtitle={t('Banner.subTitle')}
        className={styles.contactBanner}
      />
      <ContactForm />
      <Map />
    </>
  );
};

export default ContactPage;
