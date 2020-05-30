import React from "react";
import styles from "./moving-blob.module.css";
const path = require("./blob.svg");

export function MovingBlob() {
  return <img className={styles.root} src={path} />;
}
