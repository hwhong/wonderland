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

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sidebarItems: SidebarItem[] = [
    { title: "Cursor", iconName: "mouse-pointer" },
    { title: "Color Blur", iconName: "palette" },
    { title: "Moving Blob", iconName: "kiwi-bird" },
    { title: "Scroll Carousel", iconName: "scroll" },
    { title: "Window Effect", iconName: "window-maximize" },
  ];
  const stories: React.ReactNode[] = [];

  return (
    <div className={styles.root}>
      {/* <Header>Wonderland</Header> */}
      {/* <Cursor /> */}
      {/* <ColorBlur /> */}
      {/* <MovingBlob /> */}
      {/* <IpadCursor /> */}
      {/* <ScrollCarousel /> */}
      {/* <WindowEffect /> */}
      <section className={styles.leftPane}>
        <Sidebar onTitleClick={setActiveIndex} sidebarItems={sidebarItems} />
      </section>
      <section className={styles.rightPane}></section>
    </div>
  );
}

export default App;
