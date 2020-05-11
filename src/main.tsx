import React from "react";
import styles from "./main.module.css";
import { Header } from "./components/header/header";
import { Cursor } from "./components/cursor/cursor";
import { ColorBlur } from "./components/color-blur/color-blur";

function App() {
  return (
    <div className={styles.root}>
      <Header>Wonderland</Header>
      <Cursor />
      <ColorBlur />
    </div>
  );
}

export default App;
