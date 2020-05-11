import React from "react";
import styles from "./main.module.css";
import { Header } from "./components/header/header";

function App() {
  return (
    <div className={styles.root}>
      <Header>Wonderland</Header>
    </div>
  );
}

export default App;
