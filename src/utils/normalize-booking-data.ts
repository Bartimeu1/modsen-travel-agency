import { BookingSendMailPayload } from '@root/types';

import { formatDate } from './dates';

export const normalizeBookingData = (payload: BookingSendMailPayload) => {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => {
      if (value instanceof Date) {
        return [key, formatDate(value)];
      }

      return [key, value];
    }),
  );
};
