import { useContext, useEffect } from "react";

import c from "./HeadSearchInput.module.scss";
import { HeadSearchContext } from "context/HeadSearchContext/HeadSearchContext";
import HeadSearchInputProductLi from "./HeadSearchInputProductLi/HeadSearchInputProductLi";
import { usePathEffect } from "hooks/usePathEffect";

function HeadSearchInput() {
  const {
    searchProduct,
    setSearchProduct,
    filteredSearchProduct,
    inputExist,
    setInputExist,
    goShop,
  } = useContext(HeadSearchContext);

  usePathEffect(setSearchProduct, "");

  const enterEvent = (e) => {
    if (e.key === "Enter") {
      goShop();
      setInputExist(false);
    }
  };

  return (
    <div className={c.component}>
      <input
        className={c.input}
        value={searchProduct}
        onFocus={() => setInputExist(true)}
        onBlur={() => setTimeout(() => setInputExist(false), 200)}
        onChange={(e) => setSearchProduct(e.target.value)}
        onKeyDown={(e) => enterEvent(e)}
        placeholder="What do you need?"
      ></input>
      <ul style={!inputExist ? { border: "none" } : null}>
        {inputExist &&
          filteredSearchProduct.map((product, key) => (
            <HeadSearchInputProductLi key={key} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default HeadSearchInput;
