import React from "react";
import styles from "./main.module.css";
import { Header } from "./components/header/header";
import { Cursor } from "./components/cursor/cursor";
import { ColorBlur } from "./components/color-blur/color-blur";

import { MovingBlob } from "./components/moving-blob/moving-blob";
import { IpadCursor } from "./components/ipad-cursor/ipad-cursor";
import { ScrollCarousel } from "./components/scroll-carousel/scroll-carousel";
import { WindowEffect } from "./components/window-effect/window-effect";

function App() {
  return (
    <div className={styles.root}>
      <Header>Wonderland</Header>
      {/* <Cursor /> */}
      {/* <ColorBlur /> */}
      {/* <ScrollListener /> */}
      {/* <MovingBlob /> */}
      {/* <IpadCursor /> */}
      {/* <ScrollCarousel /> */}
      <WindowEffect />
    </div>
  );
}

export default App;
