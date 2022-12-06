import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from './index.module.css'

function App() {
  return (
    <div className={styles.container} >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
