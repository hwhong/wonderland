import React from "react";
import styles from "./moving-blob.module.css";
const path = require("./blob.svg");

export function MovingBlob() {
  return (
    <div className={styles.parent}>
      <img className={styles.root} src={path} />
      <div className={styles.blob}> </div>
    </div>
  );
}
