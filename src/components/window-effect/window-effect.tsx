import React from "react";
import styles from "./window-effect.module.css";

export function WindowEffect() {
  const windowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", function (event) {});
  }, []);

  return (
    <>
      <div className={styles.root}>
        <div className={styles.content}></div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.window} ref={windowRef}></div>
      </div>
    </>
  );
}
