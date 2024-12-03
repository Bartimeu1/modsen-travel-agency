import {
  SENDMAIL_BOOKING_TEMPLATE_ID,
  SENDMAIL_CONTACT_TEMPLATE_ID,
  SENDMAIL_PUBLIC_KEY,
  SENDMAIL_SECOND_PUBLIC_KEY,
  SENDMAIL_SECOND_SERVICE_ID,
  SENDMAIL_SERVICE_ID,
  SENDMAIL_SUBSCRIBE_TEMPLATE_ID,
} from '@root/config';
import { BaseSendMailPayload } from '@root/types';

import { send } from '@emailjs/browser';

export const sendSubscribeMail = (subscribeValues: BaseSendMailPayload) => {
  send(
    SENDMAIL_SERVICE_ID,
    SENDMAIL_SUBSCRIBE_TEMPLATE_ID,
    subscribeValues,
    SENDMAIL_PUBLIC_KEY,
  );
};

export const sendBookingMail = (bookingFields: BaseSendMailPayload) => {
  send(
    SENDMAIL_SERVICE_ID,
    SENDMAIL_BOOKING_TEMPLATE_ID,
    bookingFields,
    SENDMAIL_PUBLIC_KEY,
  );
};

export const sendContactMail = (contactFields: BaseSendMailPayload) => {
  send(
    SENDMAIL_SECOND_SERVICE_ID,
    SENDMAIL_CONTACT_TEMPLATE_ID,
    contactFields,
    SENDMAIL_SECOND_PUBLIC_KEY,
  );
};
