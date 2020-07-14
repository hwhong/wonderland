import React from "react";
import styles from "./sticky-scroll.module.css";

export function StickyScroll() {
  //   React.useEffect(() => {
  //     window.addEventListener("scroll", function (event) {
  //       var scroll = this.scrollY;

  //       if (card3Ref.current && 0.0001 * scroll < 1) {
  //         card3Ref.current.style.transform = `translateY(${
  //           -0.1 * scroll
  //         }px) scale(${0.001 * scroll})`;
  //       }
  //     });
  //   }, []);

  return (
    <div className={styles.root}>
      <div className={styles.stickyComponent}> </div>
      <div className={styles.scrollComponent}> </div>
    </div>
  );
}
