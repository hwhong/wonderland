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
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none">
          <circle
            cx="100"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </svg>{" "}
      </div>
    </div>
  );
}
