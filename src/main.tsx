import React from "react";
import styles from "./main.module.css";
import { Header } from "./components/header/header";
import { Cursor } from "./components/cursor/cursor";
import { ColorBlur } from "./components/color-blur/color-blur";

import { MovingBlob } from "./components/moving-blob/moving-blob";
import { IpadCursor } from "./components/ipad-cursor/ipad-cursor";
import { ScrollCarousel } from "./components/scroll-carousel/scroll-carousel";
import { WindowEffect } from "./components/window-effect/window-effect";
import { Sidebar, SidebarItem } from "./components/sidebar/sidebar";
import {
  faMousePointer,
  faPalette,
  faKiwiBird,
  faScroll,
  faWindowRestore,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { CSSGrid } from "./components/css-grid/css-grid";

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sidebarItems: SidebarItem[] = [
    { title: "Cursor", iconName: faMousePointer },
    { title: "Moving Blob", iconName: faKiwiBird },
    { title: "Scroll Carousel", iconName: faScroll },
    { title: "Window Effect", iconName: faWindowRestore },
    { title: "CSS Grid", iconName: faThLarge },
  ];
  const stories: React.ReactNode[] = [
    <div>Cursor Placeholder</div>,
    <MovingBlob />,
    <div>Scroll Carousel Placeholder</div>,
    <WindowEffect />,
    <CSSGrid />,
  ];

  return (
    <div className={styles.root}>
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
