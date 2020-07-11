import React from "react";
import styles from "./css-grid.module.css";

export function CSSGrid() {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.content}>1</div>
        <div className={styles.content}>2</div>
        <div className={styles.content}>3</div>
        <div className={styles.content}>4</div>
        <div className={styles.content}>5</div>
        <div className={styles.content}>6</div>
        <div className={styles.content}>7</div>
        <div className={styles.content}>8</div>
        <div className={styles.content}>9</div>
        <div className={styles.content}>10</div>
        <div className={styles.content}>11</div>
        <div className={styles.content}>12</div>
      </div>
    </div>
  );
}
