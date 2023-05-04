import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductContext/ProductContext";
import Product from "../../../GlobalComnponets/Product/Product";
import c from "./ProductSectionContent.module.scss";

function ProductSectionContent({ selectedProductType }) {
  const { productList } = useContext(ProductContext);

  return (
    <>
      <div className={c.ProductSectionContent}>
        {productList.map((product, i) => {
          return (
            <Product
              key={i}
              product={product}
              visability={
                product.type === selectedProductType ||
                selectedProductType === "All"
                  ? null
                  : 1
              }
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductSectionContent;
