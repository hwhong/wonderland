import React from "react";
import styles from "./header.module.css";

interface HeaderProps {
  children: React.ReactNode;
}

export function Header(props: HeaderProps) {
  return <h1 className={styles.root}>{props.children}</h1>;
}
