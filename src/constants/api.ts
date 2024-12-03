import { Room } from '@root/types';

export const BASE_ROOM_DATA: Room = {
  id: '',
  title: '',
  price: '',
  available: false,
  reviews: 0,
  rating: 0,
  info: '',
  image: '',
};

export const BASE_ROOMS_DATA = {
  items: [BASE_ROOM_DATA],
  totalCount: 0,
};
