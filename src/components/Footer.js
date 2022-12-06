import React from "react";
import SideDrawer from "./SideDrawer";
import styles from '../css/Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <SideDrawer />
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Mails</a>
          </li>
          <li>
            <a href="#">Alarms</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
        </ul>
      </nav>
      <SideDrawer />
    </div>
  );
}

export default Footer;
