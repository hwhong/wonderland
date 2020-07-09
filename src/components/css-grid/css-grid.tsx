import React from "react";
import styles from "./css-grid.module.css";

export function CSSGrid() {
  return (
    <div className={styles.root}>
      <div className={styles.grid}></div>
    </div>
  );
}
