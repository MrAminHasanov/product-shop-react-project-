import c from "./FavoriteUnbox.module.scss";
import { productTypeList } from "context/ProductContext/ProductContext";

function FavoriteUnbox({ product }) {
  const lineColor = productTypeList.find(
    ({ name }) => name === product.type
  ).bg;

  return (
    <div style={{ background: lineColor }} className={c.component}>
      <div>
        <div>
          {product.name} {product.price}$
        </div>
        <img src={product.img} alt={product.name} />
      </div>
    </div>
  );
}

export default FavoriteUnbox;
