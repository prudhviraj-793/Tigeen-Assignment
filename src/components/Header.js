import React from "react";
import SideDrawer from "./SideDrawer";
import logo from "../logo.png";

function Header() {
  return (
    <div>
      <div>
        <SideDrawer />
        <img src={logo} alt="Logo" />
        <SideDrawer />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">TAB ONE</a>
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
