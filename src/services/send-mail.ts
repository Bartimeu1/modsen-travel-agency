import {
  SENDMAIL_PUBLIC_KEY,
  SENDMAIL_SERVICE_ID,
  SENDMAIL_SUBSCRIBE_TEMPLATE_ID,
} from '@root/config';

import { send } from '@emailjs/browser';

export const sendSubscribeMail = (subscribeValues: {
  [key: string]: string;
}) => {
  send(
    SENDMAIL_SERVICE_ID,
    SENDMAIL_SUBSCRIBE_TEMPLATE_ID,
    subscribeValues,
    SENDMAIL_PUBLIC_KEY,
  );
};
