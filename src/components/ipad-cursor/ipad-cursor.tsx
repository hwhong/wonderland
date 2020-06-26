import React, { useEffect } from "react";
import styles from "./ipad-cursor.module.css";
import classNames from "classnames";

export function IpadCursor() {
  const [isCursorLocked, setIsCursorLocked] = React.useState(false);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsCursorLocked(true);
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    // cursor.style.setProperty("--top", rect.top + rect.height / 2 + "px");
    // cursor.style.setProperty("--left", rect.left + rect.width / 2 + "px");
    // cursor.style.setProperty("--width", rect.width + "px");
    // cursor.style.setProperty("--height", rect.height + "px");
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const debounce = <F extends (...args: any[]) => any>(
    func: F,
    waitFor: number
  ) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const debounced = (...args: Parameters<F>) => {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => func(...args), waitFor);
    };

    return debounced as (...args: Parameters<F>) => ReturnType<F>;
  };

  const onMouseMove = (e: MouseEvent) => {
    const { pageX, pageY } = e;
    if (cursorRef.current) {
      cursorRef.current.setAttribute(
        "style",
        `left: ${pageX}px; top: ${pageY}px;`
      );
    }
  };

  return (
    <>
      <div
        className={styles.outer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setIsCursorLocked(false)}
      >
        <div
          className={classNames(styles.inner, {
            [styles.selectedContent]: isCursorLocked,
          })}
        ></div>
      </div>
      <div ref={cursorRef} className={styles.cursorContent}></div>
    </>
  );
}
