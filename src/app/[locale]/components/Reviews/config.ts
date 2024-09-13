import { mockedReviewText } from '@root/constants';

import firstAvatar from '@assets/images/avatar1.webp';
import secondAvatar from '@assets/images/avatar2.webp';
import thirdAvatar from '@assets/images/avatar3.webp';

export const reviewsItems = [
  {
    id: 1,
    date: '2 Mar. 2023',
    rating: 4,
    text: mockedReviewText,
    userName: 'Anthony Bruff',
    userAvatar: firstAvatar,
  },
  {
    id: 2,
    date: '25 Mar. 2023',
    rating: 5,
    text: mockedReviewText,
    userName: 'Regina Gella',
    userAvatar: secondAvatar,
  },
  {
    id: 3,
    date: '5 Apr. 2023',
    rating: 3,
    text: mockedReviewText,
    userName: 'Adam Gontier',
    userAvatar: thirdAvatar,
  },
  {
    id: 4,
    date: '18 Jun. 2024',
    rating: 4,
    text: mockedReviewText,
    userName: 'Oliver Sykes',
    userAvatar: secondAvatar,
  },
  {
    id: 5,
    date: '20 Aug. 2023',
    rating: 5,
    text: mockedReviewText,
    userName: 'Sam Carter',
    userAvatar: thirdAvatar,
  },
];
