import React from "react";
import styles from "./scroll-carousel.module.css";

export function ScrollCarousel() {
  const card1Ref = React.useRef<HTMLDivElement>(null);
  const card2Ref = React.useRef<HTMLDivElement>(null);
  const card3Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY;

      if (card3Ref.current && 0.0001 * scroll < 1) {
        card3Ref.current.style.transform = `translateY(${
          -0.1 * scroll
        }px) scale(${0.001 * scroll})`;
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
