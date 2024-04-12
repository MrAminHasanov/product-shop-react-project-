import { useContext, useEffect, useState } from "react";
import c from "./HeadSearchCategoryBtn.module.scss";

import { productTypeList } from "context/ProductContext/ProductContext";
import { HeadSearchContext } from "context/HeadSearchContext/HeadSearchContext";
import { usePathEffect } from "hooks/usePathEffect";

function HeadSearchCategoryBtn() {
  const { productCategory, setProductCategory, inputExist } =
    useContext(HeadSearchContext);

  const [categoryListOnOff, setCategoryListOnOff] = useState(false);
  const typeList = ["All", ...productTypeList.map((type) => type.name)];
  useEffect(
    () => setCategoryListOnOff(inputExist ? false : categoryListOnOff),
    [inputExist, categoryListOnOff]
  );

  usePathEffect(setCategoryListOnOff, false);
  
  return (
    <button
      className={c.categorieBT}
      onClick={() => setCategoryListOnOff(!categoryListOnOff)}
    >
      <div className={c.title}>
        {productCategory === "All" ? "Categories" : productCategory}
      </div>
      <i
        className={`fa-solid fa-arrow-right ${c.icon} ${
          categoryListOnOff ? c.activeArrow : null
        }`}
      ></i>
      <i
        className={`fa-solid fa-caret-right  ${c.mobilIcon} ${
          categoryListOnOff ? c.activeArrow : null
        }`}
      ></i>

      <ul
        className={`${c.categoryList} ${categoryListOnOff ? c.activeUl : null}`}
        style={!categoryListOnOff ? { borderColor: "transporant" } : null}
      >
        {typeList.map((type, key) => (
          <li
            key={key}
            className={`${productCategory === type ? c.activeLi : null}`}
            onClick={() => setProductCategory(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </button>
  );
}

export default HeadSearchCategoryBtn;
