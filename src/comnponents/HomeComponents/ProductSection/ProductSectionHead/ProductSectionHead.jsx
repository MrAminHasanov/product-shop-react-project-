import React, { useContext } from "react";
import c from "./ProductSectionHead.module.scss";
import { ProductContext } from "../../../../context/ProductContext/ProductContext";

function ProductSectionHead({ selectedProductType, setSelectedProductType }) {
  const { productTypeList } = useContext(ProductContext);
  return (
    <div className={c.ProductSectionHead}>
      <h2 className={c.textLine}>Featured Product</h2>
      <ul>
        <li
          className={selectedProductType === "All" ? c.textLine : null}
          onClick={() => setSelectedProductType("All")}
        >
          All
        </li>
        {productTypeList.map((productType, i) => (
          <li
            key={i}
            className={
              selectedProductType === productType.name ? c.textLine : null
            }
            onClick={() => setSelectedProductType(productType.name)}
          >
            {productType.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSectionHead;
