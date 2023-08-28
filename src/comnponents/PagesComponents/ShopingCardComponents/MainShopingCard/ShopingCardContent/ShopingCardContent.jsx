import { useEffect, useState } from "react";

import c from "./ShopingCardContent.module.scss";
import ShopCardPage from "./ShopCardPage/ShopCardPage";
import FavoritePage from "./FavoritePage/FavoritePage";
import { useLocation } from "react-router-dom";

function ShopingCardContent() {
  const page = useLocation().state;
  const [selectedList, setSelectedList] = useState(
    page === null ? "shopList" : page
  );
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
