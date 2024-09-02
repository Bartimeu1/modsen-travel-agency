import { routes } from '@root/constants';

export const footerNavLinks = [
  {
    id: 1,
    key: 'quickLinks',
    links: [
      {
        id: 1,
        key: 'roomBooking',
        href: routes.rooms,
      },
      { id: 2, key: 'rooms', href: routes.rooms },
      { id: 3, key: 'contact', href: routes.contact },
      { id: 4, key: 'explore', href: '#' },
    ],
  },
  {
    id: 2,
    key: 'company',
    links: [
      {
        id: 1,
        key: 'privacyPolicy',
        href: '#',
      },
      { id: 2, key: 'refundPolicy', href: '#' },
      { id: 3, key: 'FAQ', href: '#' },
      { id: 4, key: 'about', href: '#' },
    ],
  },
  {
    id: 3,
    key: 'socialMedia',
    links: [
      {
        id: 1,
        key: 'facebook',
        href: 'https://www.facebook.com/ModsenSoftware/',
      },
      { id: 2, key: 'twitter', href: 'https://x.com/modsencompany' },
      {
        id: 3,
        key: 'instagram',
        href: 'https://www.instagram.com/modsencompany/',
      },
      {
        id: 4,
        key: 'linkedin',
        href: 'https://www.linkedin.com/company/modsen',
      },
    ],
  },
];
