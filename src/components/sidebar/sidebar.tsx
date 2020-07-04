import React from "react";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Header } from "../header/header";

export interface SidebarProps {
  // List of Sidebar Titles to render
  sidebarItems: SidebarItem[];

  onTitleClick: (i: number) => void;
}

export function Sidebar(props: SidebarProps) {
  return (
    <div className={styles.root}>
      <div className={styles.operations}></div>
      <div className={styles.main}>
        <Header size={Header.SIZES.Two}>Wonderland</Header>
      </div>
      {props.sidebarItems.map((item) => (
        <SidebarItem title={item.title} iconName={item.iconName} />
      ))}
    </div>
  );
}

export interface SidebarItem {
  title: string;
  iconName: IconName;
}

function SidebarItem(item: SidebarItem) {
  return (
    <div className={styles.sidebarItem}>
      <FontAwesomeIcon icon={item.iconName} />
      <span className={styles.text}>{item.title}</span>
    </div>
  );
}
