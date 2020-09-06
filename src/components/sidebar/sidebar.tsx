import React from "react";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Header } from "../header/header";
import classNames from "classnames";
import { Link } from "react-router-dom";

export interface SidebarProps {
  // List of Sidebar Titles to render
  sidebarItems: SidebarItem[];

  // Current Active Index
  activeIndex: number;

  onTitleClick: (i: number) => void;
}

export function Sidebar(props: SidebarProps) {
  const { sidebarItems, activeIndex, onTitleClick } = props;
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
      {sidebarItems.map((item, i) => (
        <SidebarItem
          title={item.title}
          active={activeIndex === i}
          iconName={item.iconName}
          onClick={() => onTitleClick(i)}
        />
      ))}
    </div>
  );
}

function hasher(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
  }
  return Math.abs(hash);
}

export interface SidebarItem {
  title: string;
  active?: boolean;
  iconName: IconDefinition;
  onClick?: () => void;
}

function SidebarItem(item: SidebarItem) {
  return (
    <Link to={`/e/${hasher(item.title)}`}>
      <div
        className={classNames(styles.sidebarItem, {
          [styles.activeItem]: item.active,
        })}
        onClick={item.onClick}
      >
        <FontAwesomeIcon
          className={styles.icon}
          fixedWidth
          icon={item.iconName}
        />
        <span className={styles.text}>{item.title}</span>
      </div>
    </Link>
  );
}
