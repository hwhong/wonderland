import React, { useEffect } from "react";
import styles from "./ipad-cursor.module.css";
import classNames from "classnames";

export function IpadCursor() {
  const [isCursorLocked, setIsCursorLocked] = React.useState(false);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsCursorLocked(true);

    const rect = e.currentTarget.getBoundingClientRect();

    if (cursorRef.current) {
      console.log(cursorRef.current);
      cursorRef.current.style.top = rect.top + rect.height / 2 + "px";
      cursorRef.current.style.left = rect.left + rect.width / 2 + "px";
      cursorRef.current.style.width = rect.width + "px";
      cursorRef.current.style.height = rect.height + "px";
    }
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
      cursorRef.current.style.left = pageX + "px";
      cursorRef.current.style.top = pageY + "px";
    }
  };

  // really a reset, because it won't default back
  // after we manually setted the size and all
  const onMouseLeave = (e: MouseEvent) => {};

  return (
    <>
      <div
        className={classNames(styles.inner)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setIsCursorLocked(false)}
      ></div>
      <div ref={cursorRef} className={styles.cursorContent}></div>
    </>
  );
}
