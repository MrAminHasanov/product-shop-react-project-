import { useState } from "react";

import c from "./ShopingCardContent.module.scss";
import ShopCardPage from "./ShopCardPage/ShopCardPage";
import FavoritePage from "./FavoritePage/FavoritePage";

function ShopingCardContent() {
  const [selectedList, setSelectedList] = useState("favoList");
  return (
    <div className={c.component}>
      <div className={c.listNav}>
        <hr />
        <ul>
          <li
            onClick={() => setSelectedList("shopList")}
            className={selectedList === "shopList" ? c.activeLi : null}
          >
            Shop Card
          </li>
          <li
            onClick={() => setSelectedList("favoList")}
            className={selectedList === "favoList" ? c.activeLi : null}
          >
            Favorite
          </li>
        </ul>
      </div>
      <div className={c.list}>
        {selectedList === "shopList" ? <ShopCardPage /> : <FavoritePage />}
      </div>
    </div>
  );
}

export default ShopingCardContent;
