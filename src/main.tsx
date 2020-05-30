import React from "react";
import styles from "./main.module.css";
import { Header } from "./components/header/header";
import { Cursor } from "./components/cursor/cursor";
import { ColorBlur } from "./components/color-blur/color-blur";
import { ScrollListener } from "./components/scroll-listener/scroll-listener";
import { MovingBlob } from "./components/moving-blob/moving-blob";

function App() {
  return (
    <div className={styles.root}>
      <Header>Wonderland</Header>
      <Cursor />
      <ColorBlur />
      <ScrollListener />
      <MovingBlob />
    </div>
  );
}

export default App;
