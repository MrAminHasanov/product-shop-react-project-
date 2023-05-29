import React from "react";
import c from "./HeadAccaount.module.scss";
import FavoriteBtn from "./FavoriteBtn/FavoriteBtn";

function HeadAccaount() {
  return (
    <div className={c.component}>
      <FavoriteBtn />
      <i className="fa-solid fa-bag-shopping"></i>
      <b>item:$150.000</b>
    </div>
  );
}

export default HeadAccaount;
