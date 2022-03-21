export const API_URL = 'https://api.bookmark.app/';

type Link = {
  href: string;
  title: string;
};

export const LINKS: Link[] = [
  {
    href: '/profile',
    title: 'Profile',
  },
  {
    href: '/settings',
    title: 'Settings',
  },
];
