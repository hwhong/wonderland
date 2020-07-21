import React from "react";
import styles from "./popover.module.css";

export function Popover() {
  return (
    <div className={styles.root}>
      <a
        href="#"
        className={styles.content}
        data-hover-content="<div class='hover-content'>
    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/500px-P1040705_copyGemeentehuis_Zundert.jpg' />
    <p>Zundert is a municipality and town in the south of the Netherlands, in the province of North Brabant.</p>
    </div>"
      >
        Zundert, Netherlands
      </a>
    </div>
  );
}
