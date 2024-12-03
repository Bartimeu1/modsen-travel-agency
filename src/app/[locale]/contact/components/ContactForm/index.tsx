'use client';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ValidationError } from 'yup';

import { FormField } from '@components/FormField';
import { Toast } from '@components/Toast';

import { sendContactMail } from '@root/services';
import { IErrorsObject, IToastControls, ToastTypesEnum } from '@root/types';

import { defaultFormValues, validationSchema } from './config';

import styles from './styles.module.scss';

export const ContactForm = () => {
  const t = useTranslations('Contact.Form');

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [validationErrors, setValidationErrors] = useState<IErrorsObject>({});
  const [toastControls, setToastControls] = useState<IToastControls>({
    isVisible: false,
    type: ToastTypesEnum.error,
  });

  const handleValidationErrors = (error: ValidationError) => {
    const errors: IErrorsObject = {};
    error.inner.forEach(({ path, message }) => {
      if (path) {
        errors[path] = message;
      }
    });

    setValidationErrors(errors);
  };

  const closeToast = useCallback(() => {
    setToastControls((prevState) => ({ ...prevState, isVisible: false }));
  }, []);

  const onFormFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onContactFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validationSchema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        sendContactMail(formValues);
        setValidationErrors({});
        setToastControls({ isVisible: true, type: ToastTypesEnum.success });
        setFormValues(defaultFormValues);
      })
      .catch((error) => {
        handleValidationErrors(error);
        setToastControls({ isVisible: true, type: ToastTypesEnum.error });
      });
  };

  const { fullName, email, message } = formValues;
  const {
    fullName: fullNameErrors,
    email: emailErrors,
    message: messageErrors,
  } = validationErrors;

  return (
    <section className={styles.contact}>
      <div className="container">
        <form onSubmit={onContactFormSubmit} className={styles.contactForm}>
          <div className={styles.userInfo}>
            <FormField errorText={fullNameErrors} className={styles.infoField}>
              <label>{t('labels.name')}</label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                placeholder={t('placeholders.name')}
                onChange={onFormFieldChange}
              />
            </FormField>
            <FormField errorText={emailErrors} className={styles.infoField}>
              <label>{t('labels.email')}</label>
              <input
                type="text"
                name="email"
                value={email}
                placeholder={t('placeholders.email')}
                onChange={onFormFieldChange}
              />
            </FormField>
          </div>
          <FormField errorText={messageErrors} className={styles.messageField}>
            <label>{t('labels.message')}</label>
            <textarea
              name="message"
              className={styles.userMessage}
              value={message}
              placeholder={t('placeholders.message')}
              onChange={onFormFieldChange}
            />
          </FormField>
          <button type="submit" className={styles.submitButton}>
            {t('submit')}
          </button>
        </form>
      </div>
      {toastControls.isVisible && (
        <Toast type={toastControls.type} closeToast={closeToast} />
      )}
    </section>
  );
};
