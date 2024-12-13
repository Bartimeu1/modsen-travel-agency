import { ToastTypesEnum } from '@root/types';

export interface IToastProps {
  type: keyof typeof ToastTypesEnum;
  closeToast: () => void;
}
