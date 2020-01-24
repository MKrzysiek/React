import React from "react";
import HeaderSmall from "./HeaderSmall/HeaderSmall";
import styles from "../App.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerBig}>Welcome to our store</h1>

      <HeaderSmall />
    </div>
  );
}

export default Container;
