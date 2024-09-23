import { monthsList } from '@root/constants';

export const getTargetDate = () => {
  return new Date();
};

export const getNextMonthDate = () => {
  const today = new Date();
  const nextMonthDate = new Date(today);
  nextMonthDate.setMonth(today.getMonth() + 1);

  return nextMonthDate;
};

export const addOneDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);

  return newDate;
};

export const removeOneDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 1);

  return newDate;
};

export const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = monthsList[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
