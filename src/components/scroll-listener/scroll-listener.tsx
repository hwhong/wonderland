import React, { useEffect } from "react";
import styles from "./scroll-listener.module.css";

export function ScrollListener() {
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY;
      console.log(scroll);
      console.log(ref);
      if (ref.current) {
        ref.current.setAttribute(
          "style",
          `transform: scale(${0.01 * scroll});`
        );
      }
    });
  }, []);
  return (
    <div ref={ref} className={styles.root}>
      Hello
    </div>
  );
}
