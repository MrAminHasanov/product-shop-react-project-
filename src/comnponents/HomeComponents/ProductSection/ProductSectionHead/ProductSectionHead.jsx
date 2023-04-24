import React, { useContext } from "react";
import c from "./ProductSectionHead.module.scss";
import { ProductContext } from "../../../../context/ProductContext/ProductContext";

function ProductSectionHead({ selectedProductType, setSelectedProductType }) {
  const { productTypeList} = useContext(ProductContext);
  const productTypeNameList=["All",...productTypeList.map((product)=> product.name)]
  return (
    <div className={c.ProductSectionHead}>
      <h2 className={`${c.textLine} , ${c.title}`}>Featured Product</h2>
        <ul>
        {productTypeNameList.map((productTypeName, i) => 
        (
          <li
            key={i}
            className={selectedProductType === productTypeName ? c.textLine : null}
              onClick={() => setSelectedProductType(productTypeName)}>
            {productTypeName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSectionHead;
