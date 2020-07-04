import React from "react";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface SidebarProps {
  // List of Sidebar Titles to render
  titles: SidebarItem[];

  onTitleClick: (i: number) => void;
}

export function Sidebar(props: SidebarProps) {
  return <div className={styles.root}></div>;
}

export interface SidebarItem {
  title: string;
  iconName: IconName;
}

function SidebarItem(item: SidebarItem) {
  return (
    <div className={styles.sidebarItem}>
      <FontAwesomeIcon icon={item.iconName} />
      <span> </span>
    </div>
  );
}
