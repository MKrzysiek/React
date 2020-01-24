import React from "react";
import Desktops from "../Desktops/Desktops";
import Tablets from "../Tablets/Tablets";
import styles from "../../App.module.css";

const HeaderSmall = () => {
  return (
    <div>
      <h2 className={styles.headerSmall}>Desktops</h2>
      <div className={styles.products}>
        <Desktops />
      </div>

      <h2 className={styles.headerSmall}>Tablets</h2>
      <div className={styles.products}>
        <Tablets />
      </div>
    </div>
  );
};

export default HeaderSmall;
