import * as yup from 'yup';

import { emailValidationKey, requiredValidationKey } from '@root/constants';

export const validationSchema = yup.object({
  email: yup.string().email(emailValidationKey).required(requiredValidationKey),
});

export const defaultFormValues = {
  email: '',
};
