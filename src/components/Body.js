import React from "react";

function Body() {
  return (
    <div>
      <div>step wizard</div>
      <form action="">
        <div>
          <p>I want a Company Logo</p>
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
        <div>
          <p>Present Color</p>
          <div>
            <input type="radio" name="color" value="blue" />
            <label htmlFor="">Blue</label>
          </div>
          <div>
            <input type="radio" name="color" value="red" />
            <label htmlFor="">Red</label>
          </div>
          <p>
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
          <button>CONTINUE</button>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default Body;
