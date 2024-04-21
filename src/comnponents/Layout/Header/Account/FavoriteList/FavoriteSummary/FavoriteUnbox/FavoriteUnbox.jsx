import { Link } from "react-router-dom";
import c from "./FavoriteUnbox.module.scss";
import { productTypeList } from "context/ProductContext/ProductContext";

function FavoriteUnbox({ product }) {
  const lineColor = productTypeList.find(
    ({ name }) => name === product.type
  ).bg;

  return (
    <div style={{ background: lineColor }} className={c.component}>
      <div>
        <Link to={`/shop/product-info/${product.id}`} className={c.productName}>
          {product.name} {product.price}$
        </Link>
        <img src={product.img} alt={product.name} />
      </div>
    </div>
  );
}

export default FavoriteUnbox;
