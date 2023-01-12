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
    link: '/raiting',
    Icon: MdMoving,
    name: 'Raiting',
  },
  {
    link: '/subscriptions',
    Icon: MdOutlineSupervisorAccount,
    name: 'Subscriptions',
  },
];
