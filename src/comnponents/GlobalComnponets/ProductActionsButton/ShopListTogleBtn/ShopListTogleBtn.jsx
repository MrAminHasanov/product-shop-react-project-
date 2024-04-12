import { useSelector } from "react-redux";
import { useActions } from "hooks/useActions";
import { useEffect, useState } from "react";

import c from "./ShopListTogleBtn.module.scss";
import { selectShopList } from "Store/UseStateSelector";

function ShopListTogleBtn({ id }) {
  const shopList = useSelector(selectShopList);
  const { toggleToShopList } = useActions();

  const [shopExist, setShopExist] = useState("");

  useEffect(() => {
    setShopExist(id in shopList);
  }, [shopList, id]);

  return (
    <div className={c.component}>
      <button
        className={`${c.cardAdd} ${shopExist ? null : c.activeAddCard}`}
        onClick={() => toggleToShopList(id)}
      >
        {shopExist ? "REMOVE FROM CARD" : "ADD TO CARD"}
      </button>
    </div>
  );
}

export default ShopListTogleBtn;
