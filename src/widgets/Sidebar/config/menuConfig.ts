import { icons } from 'lucide-react';

export interface SidebarMenuItem {
    text: string;
    url: string;
    icon: keyof typeof icons;
}

export const mainMenuConfig: SidebarMenuItem[] = [
  {
    text: 'Главная',
    url: '/',
    icon: 'Home',
  },
  {
    text: 'Фильмы',
    url: '/movies',
    icon: 'Video',
  },
  {
    text: 'Сериалы',
    url: '/serials',
    icon: 'Tv',
  },
  {
    text: 'Избранные',
    url: '/favorites',
    icon: 'Heart',
  },
  {
    text: 'Подписки',
    url: '/subscriptions',
    icon: 'Bell',
  },
  {
    text: 'Просмотренные',
    url: '/watched',
    icon: 'Eye',
  },
];
