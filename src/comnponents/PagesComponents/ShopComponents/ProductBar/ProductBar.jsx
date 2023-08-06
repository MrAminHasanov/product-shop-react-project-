import { useContext } from "react";

import c from "./ProductBar.module.scss";
import { ProductContext } from "context/ProductContext/ProductContext";
import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";

import Product from "comnponents/GlobalComnponets/Product/Product";

function ProductBar() {
  const { productList } = useContext(ProductContext);
  const { searchType, productPrice } = useContext(ShopPageContext);

  return (
    <div className={c.component}>
      <div className={c.topBorder}></div>
      {productList.map((e, j) => (
        <Product
          key={j}
          product={e}
          visability={
            (searchType === "All" || searchType === e.type) &&
            productPrice[0] <= e.price &&
            productPrice[1] >= e.price
              ? null
              : false 
          }
        />
      ))}
    </div>
  );
}

export default ProductBar;
