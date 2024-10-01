'use client';

import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { ValidationError } from 'yup';

import { FormField } from '@components/FormField';
import { PortalWrapper } from '@components/PortalWrapper';
import { Toast } from '@components/Toast';

import { useLockBodyScroll, useOnClickOutside } from '@root/hooks';
import { IErrorsObject, IToastControls, ToastTypesEnum } from '@root/types';

import { defaultFormValues, validationSchema } from './config';
import { BookingModalProps } from './types';

import styles from './styles.module.scss';

export const BookingModal = ({ onSendMail, onClose }: BookingModalProps) => {
  const t = useTranslations('Home.BookingPlate.modal');
  const contentRef = useRef(null);

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

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { success: toastSuccess, error: toastError } = ToastTypesEnum;
    const { email, name } = formValues;

    validationSchema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        onSendMail(name, email);
        setValidationErrors({});
        setToastControls({ isVisible: true, type: toastSuccess });
        setFormValues(defaultFormValues);
        onClose();
      })
      .catch((error) => {
        handleValidationErrors(error);
        setToastControls({ isVisible: true, type: toastError });
      });
  };

  useLockBodyScroll();
  useOnClickOutside(contentRef, onClose);

  const { name: nameErrorText, email: emailErrorText } = validationErrors;
  const { name: nameValue, email: emailValue } = formValues;

  return (
    <PortalWrapper>
      <div className={styles.bookingModal}>
        <form
          onSubmit={onFormSubmit}
          className={styles.bookingForm}
          ref={contentRef}
        >
          <h2>{t('title')}</h2>
          <FormField errorText={nameErrorText} className={styles.bookingField}>
            <input
              type="text"
              name="name"
              value={nameValue}
              placeholder={t('namePlaceholder')}
              onChange={onFormFieldChange}
            />
          </FormField>
          <FormField errorText={emailErrorText} className={styles.bookingField}>
            <input
              type="text"
              name="email"
              value={emailValue}
              placeholder={t('emailPlaceholder')}
              onChange={onFormFieldChange}
            />
          </FormField>
          <button type="submit" className={styles.submitButton}>
            {t('button')}
          </button>
        </form>
        {toastControls.isVisible && (
          <Toast type={toastControls.type} closeToast={closeToast} />
        )}
      </div>
    </PortalWrapper>
  );
};
