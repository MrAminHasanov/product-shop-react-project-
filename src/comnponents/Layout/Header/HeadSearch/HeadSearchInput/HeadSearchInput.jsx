import { useContext, useEffect, useState } from "react";

import c from "./HeadSearchInput.module.scss";
import { HeadSearchContext } from "context/HeadSearchContext/HeadSearchContext";
import HeadSearchInputProductLi from "./HeadSearchInputProductLi/HeadSearchInputProductLi";

function HeadSearchInput() {
  const {
    setSearchProduct,
    searchProduct,
    filteredSearchProduct,
    inputExist,
    setInputExist,
  } = useContext(HeadSearchContext);
  return (
    <div className={c.component}>
      <input
        className={c.input}
        onFocus={() => setInputExist(true)}
        onBlur={() => setTimeout(() => setInputExist(false), 200)}
        onChange={(e) => setSearchProduct(e.target.value)}
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
