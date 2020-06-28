import React, { useEffect } from "react";
import styles from "./ipad-cursor.module.css";
import classNames from "classnames";

const BASE_DIMENSION = 15;

export function IpadCursor() {
  const [isCursorLocked, setIsCursorLocked] = React.useState(false);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMoveDocument);
    return () => {
      document.removeEventListener("mousemove", onMouseMoveDocument);
    };
  }, []);

  const onMouseMoveDocument = (e: MouseEvent) => {
    const { pageX, pageY } = e;
    if (cursorRef.current) {
      cursorRef.current.style.left = pageX + "px";
      cursorRef.current.style.top = pageY + "px";
    }
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsCursorLocked(true);

    const target = e.currentTarget.getBoundingClientRect();

    if (cursorRef.current) {
      cursorRef.current.style.top = `${target.top + target.height / 2}px`;
      cursorRef.current.style.left = `${target.left + target.height / 2}px`;
      cursorRef.current.style.width = `${target.width}px`;
      cursorRef.current.style.height = `${target.height}px`;

      e.currentTarget.style.scale = "1.05";
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (cursorRef.current) {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();

      const halfHeight = rect.height / 2;
      const topOffset = (rect.x - rect.top - halfHeight) / halfHeight;
      const halfWidth = rect.width / 2;
      const leftOffset = (rect.y - rect.left - halfWidth) / halfWidth;

      cursorRef.current.style.transform = `translateX(${leftOffset * 3}px)`;
      cursorRef.current.style.transform = `translateY(${topOffset * 3}px)`;

      target.style.transform = `translateX(${leftOffset * 6}px)`;
      target.style.transform = `translateY(${topOffset * 4}px)`;
    }
  };

  // really a reset, because it won't default back
  // after we manually setted the size and all
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsCursorLocked(false);
    if (cursorRef.current) {
      cursorRef.current.style.width = `${BASE_DIMENSION}px`;
      cursorRef.current.style.height = `${BASE_DIMENSION}px`;

      cursorRef.current.style.transform = `translate(0,0)`;

      e.currentTarget.style.transform = `translate(0,0)`;
      e.currentTarget.style.scale = "1";
    }
  };

  return (
    <>
      <div
        className={classNames(styles.inner)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      ></div>
      <div ref={cursorRef} className={styles.cursorContent}></div>
    </>
  );
}
