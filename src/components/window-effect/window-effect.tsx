import React from "react";
import styles from "./window-effect.module.css";

export function WindowEffect() {
  return (
    <div className={styles.root}>
      <div className={styles.content}></div>
    </div>
  );
}
