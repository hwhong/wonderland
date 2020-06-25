import React from "react";
import styles from "./ipad-cursor.module.css";
import classNames from "classnames";

export function IpadCursor() {
  const innerRef = React.useRef(null);
  const [isCursorLocked, setIsCursorLocked] = React.useState(false);

  return (
    <div
      className={styles.outer}
      onMouseEnter={() => setIsCursorLocked(true)}
      onMouseLeave={() => setIsCursorLocked(false)}
    >
      <div
        ref={innerRef}
        className={classNames(styles.inner, {
          [styles.selectedContent]: isCursorLocked,
        })}
      ></div>
    </div>
  );
}
