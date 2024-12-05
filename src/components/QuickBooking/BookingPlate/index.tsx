'use client';
import { useEffect,useState } from 'react';
import DatePicker from 'react-datepicker';
import { useTranslations } from 'next-intl';

import { BookingItem, BookingModal } from '@components/QuickBooking';
import { Select } from '@components/Select';

import { addOneDay, getTargetDate, removeOneDay } from '@utils/dates';
import { normalizeBookingData } from '@utils/normalize-booking-data';

import {
  CalendarIcon,
  LocationIcon,
  PersonIcon,
  RoomTypeIcon,
} from '@root/constants';
import { BOOKING_COUNTRIES } from '@root/graphql/queries';
import { sendBookingMail } from '@root/services';

import { defaultBookingValues, personAmount, roomTypes } from './config';
import { BookingFieldsEnum } from './types';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.scss';

import { useQuery } from '@apollo/client';

export const BookingPlate = () => {
  const t = useTranslations('Home.BookingPlate');

  const [bookingValues, setBookingValues] = useState(defaultBookingValues);
  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false);

  const { data: countriesData, loading: isLoading } =
    useQuery(BOOKING_COUNTRIES);

  const { countries: countriesList } = countriesData || {};
  const { location, roomType, person, checkIn, checkOut } = BookingFieldsEnum;

  useEffect(() => {
    if (!isLoading) {
      setBookingValues((prevState) => ({
        ...prevState,
        [location]: countriesList[0].value,
      }));
    }
    // eslint-disable-next-line
  }, [isLoading]);

  const onPlateFieldChange = (name: string, value: string | Date) => {
    setBookingValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onDateFieldChange = (name: string) => (date: Date | null) => {
    if (date) {
      onPlateFieldChange(name, date);
    }
  };

  const onBookNowButtonClick = () => {
    setIsBookingModalVisible(true);
  };

  const onSendMailButtonClick = (name: string, email: string) => {
    const normalizedPayload = normalizeBookingData({
      ...bookingValues,
      name,
      email,
    });

    sendBookingMail(normalizedPayload);
  };

  const onBookingModalClose = () => {
    setIsBookingModalVisible(false);
  };

  if (isLoading) {
    return <div className={styles.plateLoader}></div>;
  }

  return (
    <aside className={styles.bookingPlate}>
      <BookingItem name={location} image={<LocationIcon />}>
        <Select
          name={location}
          options={countriesList}
          onSelect={onPlateFieldChange}
          targetOption={bookingValues[location]}
        />
      </BookingItem>
      <BookingItem name={roomType} image={<RoomTypeIcon />}>
        <Select
          name={roomType}
          options={roomTypes}
          onSelect={onPlateFieldChange}
          targetOption={bookingValues[roomType]}
        />
      </BookingItem>
      <BookingItem name={person} image={<PersonIcon />}>
        <Select
          name={person}
          options={personAmount}
          onSelect={onPlateFieldChange}
          targetOption={bookingValues[person]}
        />
      </BookingItem>
      <BookingItem name={checkIn} image={<CalendarIcon />}>
        <DatePicker
          onChange={onDateFieldChange(checkIn)}
          selected={bookingValues[checkIn]}
          minDate={getTargetDate()}
          maxDate={removeOneDay(bookingValues[checkOut])}
        />
      </BookingItem>
      <BookingItem name={checkOut} image={<CalendarIcon />}>
        <DatePicker
          onChange={onDateFieldChange(checkOut)}
          selected={bookingValues[checkOut]}
          minDate={addOneDay(bookingValues[checkIn])}
        />
      </BookingItem>
      <button className={styles.bookingButton} onClick={onBookNowButtonClick}>
        {t('button')}
      </button>
      {isBookingModalVisible && (
        <BookingModal
          onSendMail={onSendMailButtonClick}
          onClose={onBookingModalClose}
        />
      )}
    </aside>
  );
};
