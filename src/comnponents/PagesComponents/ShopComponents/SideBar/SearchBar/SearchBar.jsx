import c from "./SearchBar.module.scss";
import { useContext } from "react";

import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";

function SearchBar() {
  const { setSearchProduct } = useContext(ShopPageContext);

  return (
    <div className={c.component}>
      <div className={c.title}>Search</div>
      <div className={c.inputBox}>
        <input onChange={(e)=> setSearchProduct(e.target.value)} placeholder="Search..." type="text" maxLength={20} />
        <button></button>
      </div>
    </div>
  );
}

export default SearchBar;
