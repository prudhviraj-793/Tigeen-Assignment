import React from "react";
import SideDrawer from "./SideDrawer";
import logo from "../logo.png";
import styles from "../css/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SideDrawer />
        <img src={logo} alt="Logo" />
        <SideDrawer />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#" className={styles.active}>
              TAB ONE
            </a>
          </li>
          <li>
            <a href="#">TAB TWO</a>
          </li>
          <li>
            <a href="#">TAB THREE</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
