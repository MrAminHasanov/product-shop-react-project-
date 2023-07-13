import React from "react";
import c from "./HeadContact.module.scss"

function HeadContact({screenState}) {
  return (
    <div className={c.component}
    style={screenState === "default" ? {"--defaultList":"flex" , "--mobileList":"none"} : {"--mobileList":"flex" , "--defaultList":"none"}}
    >
      <i className="fa-solid fa-phone"></i>
      <div className={c.supportContainer}>
        <div>+65 11.188.888</div>
        <div>support 24/7 time</div>
      </div>
    </div>
  );
}

export default HeadContact;
