import React from "react";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Header } from "../header/header";
import classNames from "classnames";

export interface SidebarProps {
  // List of Sidebar Titles to render
  sidebarItems: SidebarItem[];

  onTitleClick: (i: number) => void;
}

export function Sidebar(props: SidebarProps) {
  return (
    <div className={styles.root}>
      <div className={styles.operations}>
        <p className={classNames(styles.circle, styles.red)}></p>
        <p className={classNames(styles.circle, styles.yellow)}></p>
        <p className={classNames(styles.circle, styles.green)}></p>
      </div>
      <div className={styles.main}>
        <Header className={styles.header} size={Header.SIZES.Two}>
          Wonderland
        </Header>
      </div>
      {props.sidebarItems.map((item) => (
        <SidebarItem title={item.title} iconName={item.iconName} />
      ))}
    </div>
  );
}

export interface SidebarItem {
  title: string;
  iconName: IconDefinition;
}

function SidebarItem(item: SidebarItem) {
  return (
    <div className={styles.sidebarItem}>
      <FontAwesomeIcon
        className={styles.icon}
        fixedWidth
        icon={item.iconName}
      />
      <span className={styles.text}>{item.title}</span>
    </div>
  );
}
