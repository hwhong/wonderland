import React from "react";
import styles from "./scroll-carousel.module.css";

export function ScrollCarousel() {
  const card1Ref = React.useRef<HTMLDivElement>(null);
  const card2Ref = React.useRef<HTMLDivElement>(null);
  const card3Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY;

      if (card1Ref.current) {
      }
    });
  }, []);

  return (
    <div className={styles.root}>
      <div ref={card1Ref} className={styles.card}></div>
      <div ref={card2Ref} className={styles.card}></div>
      <div ref={card3Ref} className={styles.card}></div>
    </div>
  );
}
