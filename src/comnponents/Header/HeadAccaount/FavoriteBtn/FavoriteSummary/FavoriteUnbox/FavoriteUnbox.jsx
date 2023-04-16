import { useContext } from "react";
import { ProductContext } from "../../../../../../context/ProductContext/ProductContext";
import c from "./FavoriteUnbox.module.scss";

function FavoriteUnbox({ product }) {
  const { productTypeList } = useContext(ProductContext);
  const lineColor = productTypeList.find(
    ({ name }) => name === product.type
  ).bg;

  return (
    <div style={{ background: lineColor }} className={c.FavoriteBox}>
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
