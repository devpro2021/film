import { FC } from "react";
import { SidebarMenuItem } from "@widgets/Sidebar/config/menuConfig";
import { SidebarItem } from "@widgets/Sidebar/ui/SidebarItem/SidebarItem";

import styles from "./styles.module.scss";

interface SidebarSectionProps {
  title: string;
  config: SidebarMenuItem[];
}
export const SidebarSection: FC<SidebarSectionProps> = ({ title, config }) => (
  <div className={styles.SidebarSection}>
    <div className={styles.SidebarSection__title}>{title}</div>
    <div>
      {config.map((item) => (
        <SidebarItem key={item.url} itemData={item} />
      ))}
    </div>
  </div>
);
