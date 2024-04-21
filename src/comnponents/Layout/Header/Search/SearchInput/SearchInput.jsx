import { useContext } from "react";

import c from "./SearchInput.module.scss";
import { SearchContext } from "context/SearchContext/SearchContext";
import SearchProduct from "./SearchProduct/SearchProduct";
import { usePathEffect } from "hooks/usePathEffect";

function SearchInput() {
  const {
    searchProduct,
    setSearchProduct,
    filteredSearchProduct,
    inputExist,
    setInputExist,
    goShop,
  } = useContext(SearchContext);

  usePathEffect(setSearchProduct, "");

  const enterEvent = (e) => {
    if (e.key === "Enter") {
      goShop();
      setInputExist(false);
    }
  };

  return (
    <div className={c.component}
      tabIndex={1}
      onFocus={() => setInputExist(true)}
      onBlur={() => setInputExist(false)}>
      <input
        className={c.input}
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        onKeyDown={(e) => enterEvent(e)}
        placeholder="What do you need?"
      ></input>
      <ul>
        {inputExist &&
          filteredSearchProduct.map((product, key) => (
            <SearchProduct key={key} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default SearchInput;
