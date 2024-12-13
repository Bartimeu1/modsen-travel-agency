export enum ToastTypesEnum {
  error = 'error',
  success = 'success',
}

export interface IToastControls {
  isVisible: boolean;
  type: keyof typeof ToastTypesEnum;
}
