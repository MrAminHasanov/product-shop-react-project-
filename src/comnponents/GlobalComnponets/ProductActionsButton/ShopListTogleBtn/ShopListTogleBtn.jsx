import { useSelector } from "react-redux";
import c from "./ShopListTogleBtn.module.scss";
import { useActions } from "hooks/useActions";
import { useEffect, useState } from "react";

function ShopListTogleBtn({ id }) {
  const { shopList } = useSelector((state) => state);
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
