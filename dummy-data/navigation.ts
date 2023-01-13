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
  },
  {
    link: '/messages',
    Icon: MdOutlineMailOutline,
    name: 'Messages',
  },
  {
    link: '/rating',
    Icon: MdMoving,
    name: 'Rating',
  },
  {
    link: '/subscriptions',
    Icon: MdOutlineSupervisorAccount,
    name: 'Subscriptions',
  },
];
