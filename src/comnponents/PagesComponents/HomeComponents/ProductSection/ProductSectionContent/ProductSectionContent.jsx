import { useSelector } from "react-redux";

import c from "./ProductSectionContent.module.scss";
import Product from "../../../../GlobalComnponets/Product/Product";
import { productList } from "../../../../../context/ProductContext/ProductContext";

function ProductSectionContent({ selectedProductType }) {
  const { favoriteList, shopList } = useSelector((state) => state);

  return (
    <>
      <div className={c.ProductSectionContent}>
        {productList.map((product, i) =>
          product.type === selectedProductType ||
          selectedProductType === "All" ? (
            <Product
              key={i}
              product={product}
              favoriteList={favoriteList}
              shopList={shopList}
            />
          ) : null
        )}
      </div>
    </>
  );
}

export default ProductSectionContent;
