import c from "./ProductTypeList.module.scss";
import { useContext } from "react";

import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";
import { productTypeList } from "../../../../../context/ProductContext/ProductContext";

function ProductTypeList() {
  const { searchType, setSearchType } = useContext(ShopPageContext);
  const productNameTypeList = [
    "All",
    ...productTypeList.map((type) => type.name),
  ];
  return (
    <div className={c.component}>
      <div className={c.title}>Product type</div>
      <ul className={c.typeList}>
        {productNameTypeList.map((i, j) => (
          <li key={j}>
            <span
              onClick={() => setSearchType(i)}
              className={i === searchType ? c.active : null}
            >
              {i}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductTypeList;
