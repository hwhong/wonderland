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
      <div className={styles.window}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 747 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="6"
            width="735"
            height="212"
            stroke="white"
            stroke-width="12"
          ></rect>
        </svg>
      </div>
    </div>
  );
}
