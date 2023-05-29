import React from "react";
import c from "./HeadContact.module.scss"

function HeadContact() {
  return (
    <div className={c.component}>
      <i className="fa-solid fa-phone"></i>
      <div>
        <div>+65 11.188.888</div>
        <div>support 24/7 time</div>
      </div>
    </div>
  );
}

export default HeadContact;
