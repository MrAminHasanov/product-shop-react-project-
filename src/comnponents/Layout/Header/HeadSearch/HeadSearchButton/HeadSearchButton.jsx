import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import c from "./HeadSearchButton.module.scss";
import { HeadSearchContext } from "context/HeadSearchContext/HeadSearchContext";

function HeadSearchButton() {
  const { productCategory, searchProduct } = useContext(HeadSearchContext);
  const navigator = useNavigate();

  const goShop = () =>
    navigator("/shop", {
      state: { category: productCategory, search: searchProduct },
    });

  return (
    <div className={c.component}>
      <button className={c.searchBT}>
        <div onClick={() => goShop()} className={c.title}>
          SEARCH
        </div>
        <i className={`fa-solid fa-magnifying-glass ${c.mobilIcon}`}></i>
      </button>
    </div>
  );
}

export default HeadSearchButton;
