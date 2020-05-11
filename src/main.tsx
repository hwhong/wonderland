import React from "react";
import styles from "./main.module.css";
import { Header } from "./components/header/header";
import { Cursor } from "./components/cursor/cursor";

function App() {
  return (
    <div className={styles.root}>
      <Header>Wonderland</Header>
      <Cursor />
    </div>
  );
}

export default App;
