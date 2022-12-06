import React from "react";
import styles from "../css/Body.module.css";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import AdjustIcon from "@mui/icons-material/Adjust";

function Body() {
  return (
    <div className={styles.container}>
      <div className={styles.wizard}>
        <EditIcon />
        <div className={styles.line}></div>
        <SettingsIcon />
        <div className={styles.line}></div>
        <AdjustIcon />
      </div>
      <form action="" className={styles.form}>
        <div>
          <p className={styles.text}>I want a Company Logo</p>
          <div className={styles.options}>
            <div>
              <input type="radio" name="logo" value="left" />
              <label htmlFor="">Left</label>
            </div>
            <div>
              <input type="radio" name="logo" value="right" />
              <label htmlFor="">Right</label>
            </div>
            <div>
              <input type="radio" name="logo" value="center" />
              <label htmlFor="">Center</label>
            </div>
            <div>
              <input type="radio" name="logo" value="disable" />
              <label htmlFor="">Disable</label>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.text}>Present Color</p>
          <div className={styles.options}>
            <div>
              <input type="radio" name="color" value="blue" />
              <label htmlFor="">Blue</label>
            </div>
            <div>
              <input type="radio" name="color" value="red" />
              <label htmlFor="">Red</label>
            </div>
          </div>
          <p className={styles.text}>
            Present Apply only: Header Background, Button, Radio Button & Switch
          </p>
        </div>
        <div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">i want a header</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">i want a footer</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">i want a Drawer overlay mode</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">i want a left-side drawer</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">i want a right-side drawer</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">i want a navigation tabs</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">i want a bottom menu</label>
          </div>
        </div>
        <div>
          <button className={styles.btn}>CONTINUE</button>
        </div>
      </form>
    </div>
  );
}

export default Body;
