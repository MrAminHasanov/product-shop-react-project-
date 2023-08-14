import { useContext } from "react";

import c from "./ProductPageMenu.module.scss";
import { ProductContext } from "context/ProductContext/ProductContext";
import ProductPageSideMenu from "./ProductPageSideMenu/ProductPageSideMenu";

function ProductPageMenu({ id }) {
  const { productList } = useContext(ProductContext);
  const product = productList[id];

  return (
    <div className={c.component}>
      <div className={c.imageBox}>
        <img src={product.img} alt="" />
      </div>
      <div className={c.InformaitonBox}>
        <ProductPageSideMenu name={product.name} price={product.price}/>
      </div>
    </div>
  );
}

export default ProductPageMenu;
