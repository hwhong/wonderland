import React from "react";
import styles from "./header.module.css";
import classNames from "classnames";

enum HeaderSize {
  One = "one",
  Two = "two",
  Three = "three",
  Four = "four",
}

interface HeaderProps {
  children: string;

  size: HeaderSize;
}

export function Header(props: HeaderProps) {
  const { children, size } = props;
  const sizeClass = size ? styles[size] : "";

  return <span className={classNames(styles.root, sizeClass)}>{children}</span>;
}

Header.defaultProps = {
  children: "Wonderland",
  size: HeaderSize.Three,
};
Header.SIZES = HeaderSize;
