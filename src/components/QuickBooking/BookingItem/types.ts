import { ReactNode } from 'react';

import { BookingFieldsEnum } from '../BookingPlate/types';

export interface BookingItemProps {
  children: ReactNode;
  image: ReactNode;
  name: BookingFieldsEnum;
}
