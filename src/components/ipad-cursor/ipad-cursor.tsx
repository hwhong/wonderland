import React, { useEffect } from "react";
import styles from "./ipad-cursor.module.css";
import classNames from "classnames";

export function IpadCursor() {
  const innerRef = React.useRef(null);
  const [isCursorLocked, setIsCursorLocked] = React.useState(false);
  const cursor = document.querySelector("#cursor");

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsCursorLocked(true);
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    cursor.style.setProperty("--top", rect.top + rect.height / 2 + "px");
    cursor.style.setProperty("--left", rect.left + rect.width / 2 + "px");
    cursor.style.setProperty("--width", rect.width + "px");
    cursor.style.setProperty("--height", rect.height + "px");
  };

  React.useEffect(() => {
    const div = innerRef.current;
    // subscribe event
    div.addEventListener("scroll", handleOnScroll);
    return () => {
      // unsubscribe event
      div.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const handleOnScroll = (e) => {
    // NOTE: This is for the sake of demonstration purpose only.
    // Doing this will greatly affect performance.
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div
      className={styles.outer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setIsCursorLocked(false)}
    >
      <div
        ref={innerRef}
        className={classNames(styles.inner, {
          [styles.selectedContent]: isCursorLocked,
        })}
      ></div>
      <div id="cursor">
        <div className="cursorContent"></div>
      </div>
    </div>
  );
}
