import * as yup from 'yup';

import {
  emailValidationKey,
  longValueValidationKey,
  requiredValidationKey,
  shortValueValidationKey,
} from '@root/constants';

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, shortValueValidationKey)
    .max(20, longValueValidationKey)
    .required(requiredValidationKey),
  email: yup.string().email(emailValidationKey).required(requiredValidationKey),
});

export const defaultFormValues = {
  name: '',
  email: '',
};
