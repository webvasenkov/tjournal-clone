import {
  MdRssFeed,
  MdOutlineMailOutline,
  MdMoving,
  MdOutlineSupervisorAccount,
} from 'react-icons/md';

export const navigation = [
  {
    link: '/',
    Icon: MdRssFeed,
    name: 'Feed',
    paths: ['/', '/article']
  },
  {
    link: '/messages',
    Icon: MdOutlineMailOutline,
    name: 'Messages',
    paths: ['/messages']
  },
  {
    link: '/rating',
    Icon: MdMoving,
    name: 'Rating',
    paths: ['/rating']
  },
  {
    link: '/subscriptions',
    Icon: MdOutlineSupervisorAccount,
    name: 'Subscriptions',
    paths: ['/subscriptions']
  },
];
