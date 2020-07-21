import React from "react";
import styles from "./main.module.css";
import { MovingBlob } from "./components/moving-blob/moving-blob";
import { IpadCursor } from "./components/ipad-cursor/ipad-cursor";
import { WindowEffect } from "./components/window-effect/window-effect";
import { Sidebar, SidebarItem } from "./components/sidebar/sidebar";
import {
  faMousePointer,
  faKiwiBird,
  faScroll,
  faWindowRestore,
  faThLarge,
  faSoap,
} from "@fortawesome/free-solid-svg-icons";
import { CSSGrid } from "./components/css-grid/css-grid";
import classNames from "classnames";
import { Popover } from "./components/popover/popover";

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sidebarItems: SidebarItem[] = [
    { title: "Cursor", iconName: faMousePointer },
    { title: "Moving Blob", iconName: faKiwiBird },
    { title: "Sticky Scroll", iconName: faScroll },
    { title: "Window Effect", iconName: faWindowRestore },
    { title: "CSS Grid", iconName: faThLarge },
    { title: "Popover", iconName: faSoap },
  ];
  const stories: React.ReactNode[] = [
    <IpadCursor />,
    <MovingBlob />,
    <div>Scroll Carousel Placeholder</div>,
    <WindowEffect />,
    <CSSGrid />,
    <Popover />,
  ];

  return (
    <div
      className={classNames(styles.root, {
        [styles.noCursor]: activeIndex === 0,
      })}
    >
      <Sidebar
        onTitleClick={setActiveIndex}
        sidebarItems={sidebarItems}
        activeIndex={activeIndex}
      />

      <section className={styles.rightPane}>
        <div className={styles.rightWrapper}>{stories[activeIndex]}</div>
      </section>
    </div>
  );
}

export default App;
