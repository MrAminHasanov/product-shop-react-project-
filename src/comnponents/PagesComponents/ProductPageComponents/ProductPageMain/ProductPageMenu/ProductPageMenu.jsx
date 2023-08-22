import c from "./ProductPageMenu.module.scss";
import ProductPageSideMenu from "./ProductPageSideMenu/ProductPageSideMenu";
import { productList } from "context/ProductContext/ProductContext";

function ProductPageMenu({ id }) {
  const product = productList[id];

  return (
    <div className={c.component}>
      <div className={c.imageBox}>
        <img src={product.img} alt="" />
      </div>
      <div className={c.InformaitonBox}>
        <ProductPageSideMenu name={product.name} price={product.price} id={product.id} />
      </div>
    </div>
  );
}

export default ProductPageMenu;
