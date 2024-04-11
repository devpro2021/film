import { icons } from 'lucide-react';

export interface SidebarMenuItem {
    text: string;
    url: string;
    icon: keyof typeof icons;
}

export const generalMenuConfig: SidebarMenuItem[] = [
  {
    text: 'Настройки',
    url: '/settings',
    icon: 'Settings',
  },
  {
    text: 'Выход',
    url: '/logout',
    icon: 'LogOut',
  },
];
