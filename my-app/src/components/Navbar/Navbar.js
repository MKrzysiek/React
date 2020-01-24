import React from "react";
import styles from "../../App.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.nav}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="catalog">Catalog</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
