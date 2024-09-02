'use client';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ValidationError } from 'yup';

import { FormField } from '@components/FormField';
import { Toast } from '@components/Toast';

import { sendSubscribeMail } from '@root/services';
import { IToastControls, ToastTypesEnum } from '@root/types';
import { IErrorsObject } from '@root/types';

import { defaultFormValues, validationSchema } from './config';

import styles from './styles.module.scss';

export const SubscribeForm = () => {
  const t = useTranslations('Subscribe');

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [validationErrors, setValidationErrors] = useState<IErrorsObject>({});
  const [toastControls, setToastControls] = useState<IToastControls>({
    isVisible: false,
    type: ToastTypesEnum.error,
  });

  const closeToast = useCallback(() => {
    setToastControls((prevState) => ({ ...prevState, isVisible: false }));
  }, []);

  const handleValidationErrors = (error: ValidationError) => {
    const errors: IErrorsObject = {};
    error.inner.forEach(({ path, message }) => {
      if (path) {
        errors[path] = message;
      }
    });

    setValidationErrors(errors);
  };

  const onFormFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubscribeFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validationSchema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        sendSubscribeMail(formValues);
        setValidationErrors({});
        setToastControls({ isVisible: true, type: ToastTypesEnum.success });
        setFormValues(defaultFormValues);
      })
      .catch((error) => {
        handleValidationErrors(error);
        setToastControls({ isVisible: true, type: ToastTypesEnum.error });
      });
  };

  const { email: emailErrorText } = validationErrors;
  const { email: emailValue } = formValues;

  return (
    <>
      <form className={styles.subscribeForm} onSubmit={onSubscribeFormSubmit}>
        <h4>{t('title')}</h4>
        <p className={styles.subscribeSubtitle}>{t('subtitle')}</p>
        <FormField errorText={emailErrorText}>
          <input
            type="text"
            name="email"
            placeholder={t('placeholder')}
            className={styles.subscribeInput}
            value={emailValue}
            onChange={onFormFieldChange}
          />
          <button className={styles.subscribeButton} type="submit">
            {t('button')}
          </button>
        </FormField>
      </form>
      {toastControls.isVisible && (
        <Toast type={toastControls.type} closeToast={closeToast} />
      )}
    </>
  );
};
