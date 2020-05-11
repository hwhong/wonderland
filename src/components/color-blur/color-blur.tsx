import React from "react";
import styles from "./color-blur.module.css";

export function ColorBlur() {
  return (
    <div className={styles.root}>
      <div className={styles.topLeft}></div>
      <div className={styles.topRight}></div>
      <div className={styles.bottomLeft}></div>
      <div className={styles.bottomRight}></div>
    </div>
  );
}
