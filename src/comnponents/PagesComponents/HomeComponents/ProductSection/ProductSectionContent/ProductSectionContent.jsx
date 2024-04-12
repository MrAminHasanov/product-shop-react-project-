import c from "./ProductSectionContent.module.scss";
import Product from "../../../../GlobalComnponets/Product/Product";
import { productList } from "../../../../../context/ProductContext/ProductContext";

function ProductSectionContent({ selectedProductType }) {

  return (
    <>
      <div className={c.ProductSectionContent}>
        {productList.map((product, i) =>
          product.type === selectedProductType ||
          selectedProductType === "All" ? (
            <Product
              key={i}
              product={product}
            />
          ) : null
        )}
      </div>
    </>
  );
}

export default ProductSectionContent;
