import { useContext } from "react";
import c from "./ProductSectionContent.module.scss";

import { ProductContext } from "../../../../../context/ProductContext/ProductContext";
import Product from "../../../../GlobalComnponets/Product/Product";

function ProductSectionContent({ selectedProductType }) {
  const { productList } = useContext(ProductContext);
  return (
    <>
      <div className={c.ProductSectionContent}>
        {productList.map((product, i) =>
          product.type === selectedProductType ||
          selectedProductType === "All" ? (
            <Product key={i} product={product} />
          ) : null
        )}
      </div>
    </>
  );
}

export default ProductSectionContent;
