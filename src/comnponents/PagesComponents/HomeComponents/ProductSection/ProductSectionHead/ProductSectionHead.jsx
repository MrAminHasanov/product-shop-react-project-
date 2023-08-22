import c from "./ProductSectionHead.module.scss";

import Title from "../../../../GlobalComnponets/Title/Title";
import { productTypeList } from "../../../../../context/ProductContext/ProductContext";

function ProductSectionHead({ selectedProductType, setSelectedProductType }) {
  const productTypeNameList = [
    "All",
    ...productTypeList.map((product) => product.name),
  ];
  return (
    <div className={c.component}>
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
