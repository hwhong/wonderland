import React, { useEffect } from "react";
import styles from "./cursor.module.css";

export function Cursor() {
  const ref = React.useRef<HTMLDivElement>(null);
  const onMouseMove = (event: MouseEvent) => {
    const { pageX, pageY } = event;
    if (ref.current) {
      ref.current.setAttribute(
        "style",
        `transform: translate3d(${pageX + 10}px, ${
          pageY + 10
        }px, 0); opacity: 1;`
      );
    }
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className={styles.root}>
      Warren
    </div>
  );
}
