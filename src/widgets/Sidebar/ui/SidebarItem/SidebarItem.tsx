import { FC } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import { Icon } from "@shared/ui";

import { SidebarMenuItem } from "../../config/menuConfig";

import styles from "./styles.module.scss";

interface SidebarItemProps {
  itemData: SidebarMenuItem;
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { pathname } = useLocation();
  const { itemData } = props;
  const { SidebarItem, active } = styles;

  const isActive = pathname === itemData.url;

  return (
    <Link
      className={classNames([SidebarItem, { [active]: isActive }])}
      to={itemData.url}
    >
      <Icon name={itemData.icon} />
      <span className={styles.SidebarItem__title}>{itemData.text}</span>
    </Link>
  );
};
