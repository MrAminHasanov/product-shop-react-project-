import { useContext } from "react";

import c from "./SearchBtn.module.scss";
import { SearchContext } from "context/SearchContext/SearchContext";

function SearchBtn() {
  const { goShop } = useContext(SearchContext);

  return (
    <div className={c.component}>
      <button onClick={() => goShop()} className={c.searchBT}>
        <div className={c.title}>SEARCH</div>
        <i className={`fa-solid fa-magnifying-glass ${c.mobilIcon}`}></i>
      </button>
    </div>
  );
}

export default SearchBtn;
