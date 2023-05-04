import React, { useContext } from "react";
import c from "./ProductSectionHead.module.scss";
import { ProductContext } from "../../../../context/ProductContext/ProductContext";
import Title from "../../../GlobalComnponets/Title/Title";

function ProductSectionHead({ selectedProductType, setSelectedProductType }) {
  const { productTypeList } = useContext(ProductContext);
  const productTypeNameList = [
    "All",
    ...productTypeList.map((product) => product.name),
  ];
  return (
    <div className={c.ProductSectionHead}>
      <Title context={"Featured Product"} />
      <ul>
        {productTypeNameList.map((productTypeName, i) => (
          <li
            key={i}
            className={
              selectedProductType === productTypeName ? c.textLine : null
            }
            onClick={() => setSelectedProductType(productTypeName)}
          >
            {productTypeName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSectionHead;
