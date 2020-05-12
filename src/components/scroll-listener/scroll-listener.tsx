import React, { useEffect } from "react";
import styles from "./scroll-listener.module.css";

export function ScrollListener() {
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY;
      console.log(scroll);
      ref.current?.setAttribute(
        "transform",
        `translateY(${-scroll}px) scale(${scroll * 0.1});`
      );
    });
  }, []);
  return <div ref={ref} className={styles.root}></div>;
}
