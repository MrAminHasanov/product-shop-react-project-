import { Link } from "react-router-dom";

import c from "./Product.module.scss";
import FavoriteButon from "./FavoriteButon/FavoriteButon";
import ShopCardButon from "./ShopCardButon/ShopCardButon";

function Product({ product }) {
  return (
    <div className={c.product}>
      <img src={product.img} alt={product.name}></img>
      <div className={c.productName}>
        <Link to={`/shop/product-info/${product.id}`}>{product.name}</Link>
      </div>
      <div className={c.produtcPrice}>{product.price}$</div>

      <div className={c.product_button}>
        <FavoriteButon id={product.id} />
        <ShopCardButon id={product.id} />
      </div>
    </div>
  );
}
export default Product;
