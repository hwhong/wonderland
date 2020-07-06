import React from "react";
import styles from "./window-effect.module.css";

export function WindowEffect() {
  const windowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", function (event) {
      let scroll = this.scrollY;
    });
  }, []);

  // the window in overlay might not work. need to make
  // overlay the window itself because of background issues
  // need to be transparent
  return (
    <div className={styles.root}>
      <div className={styles.content}></div>
      <div className={styles.window}> </div>
    </div>
  );
}
