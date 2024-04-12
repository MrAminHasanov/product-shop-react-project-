import { useContext } from "react";

import c from "./HeadSearchButton.module.scss";
import { HeadSearchContext } from "context/HeadSearchContext/HeadSearchContext";

function HeadSearchButton() {
  const { goShop } = useContext(HeadSearchContext);

  return (
    <div className={c.component}>
      <button onClick={() => goShop()} className={c.searchBT}>
        <div className={c.title}>SEARCH</div>
        <i className={`fa-solid fa-magnifying-glass ${c.mobilIcon}`}></i>
      </button>
    </div>
  );
}

export default HeadSearchButton;
