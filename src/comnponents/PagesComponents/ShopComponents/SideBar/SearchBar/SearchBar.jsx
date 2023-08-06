import c from "./SearchBar.module.scss";
import { useContext } from "react";

import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";

function SearchBar() {
  const { setSearchProduct } = useContext(ShopPageContext);

  return (
    <div className={c.component}>
      <div className={c.title}>Search</div>
      <div className={c.inputBox}>
        <input placeholder="Search..." type="text" maxLength={30} />
        <button>Find</button>
      </div>
    </div>
  );
}

export default SearchBar;
