import * as yup from 'yup';

import { emailValidationKey, requiredValidationKey } from '@root/constants';

export const validationSchema = yup.object({
  fullName: yup.string().min(2).max(50).required(requiredValidationKey),
  email: yup.string().email(emailValidationKey).required(requiredValidationKey),
  message: yup.string().min(5).max(50).required(requiredValidationKey),
});

export const defaultFormValues = {
  fullName: '',
  email: '',
  message: '',
};
