import React from "react";
import styles from "./ipad-cursor.module.css";

export function IpadCursor() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}></div>
    </div>
  );
}
