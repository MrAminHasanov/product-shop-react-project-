import React from "react";
import c from "./HeadAccaount.module.scss";
import FavoriteBtn from "./FavoriteBtn/FavoriteBtn";

function HeadAccaount({screenState}) {
  return (
    <div className={c.component}
    style={screenState === "default" ? {"--defaultList":"grid" , "--mobileList":"none"} : {"--mobileList":"grid" , "--defaultList":"none"}}
    >
      <FavoriteBtn />
      <i className="fa-solid fa-bag-shopping"></i>
      <p>item:<b>$150.000</b></p>
    </div>
    );
  }

export default HeadAccaount;
