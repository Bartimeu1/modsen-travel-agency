import { StaticImageData } from 'next/image';

export interface ReviewItemProps {
  date: string;
  rating: number;
  text: string;
  userAvatar: StaticImageData;
  userName: string;
}
