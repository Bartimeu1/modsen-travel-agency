import { getNextMonthDate, getTargetDate } from '@root/utils/dates';

import { BookingFieldsEnum } from './types';

const { location, roomType, person, checkIn, checkOut } = BookingFieldsEnum;

export const defaultBookingValues = {
  [location]: '',
  [roomType]: 'Standard',
  [person]: '01',
  [checkIn]: getTargetDate(),
  [checkOut]: getNextMonthDate(),
};

export const roomTypes = [
  {
    id: 1,
    value: 'Standard',
  },
  { id: 2, value: 'Roal' },
];

export const personAmount = [
  { id: 1, value: '01' },
  { id: 2, value: '02' },
  { id: 3, value: '03' },
  { id: 4, value: '04' },
  { id: 5, value: '05' },
  { id: 6, value: '06' },
  { id: 7, value: '07' },
];
