import { useActions } from "hooks/useActions";

import c from "./ShopCardButon.module.scss";
import { useSelector } from "react-redux";

function ShopCardButon({ id }) {
  const { toggleToShopList } = useActions();
  const shopList = useSelector((state) => state.shopList);

  return (
    <div className={c.component}>
      <i
        onClick={() => toggleToShopList(id)}
        className={`fa-solid fa-basket-shopping
        ${id in shopList ? c.activeIcon : null}`}
      ></i>
    </div>
  );
}

export default ShopCardButon;
