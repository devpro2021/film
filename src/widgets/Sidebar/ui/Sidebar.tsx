import { generalMenuConfig } from '@widgets/Sidebar/config/generalConfig';

import { Logo } from '@shared/ui';

import { SidebarSection } from './SidebarSection/SidebarSection';
import { mainMenuConfig } from '../config/menuConfig';

import styles from './styles.module.scss';

export function Sidebar() {
  return (
      <div className={styles.Sidebar}>
          <Logo />
          <div className={styles.Sidebar__menus}>
              <SidebarSection config={mainMenuConfig} title="Меню" />
              <SidebarSection config={generalMenuConfig} title="Общее" />
          </div>

      </div>
  );
}
