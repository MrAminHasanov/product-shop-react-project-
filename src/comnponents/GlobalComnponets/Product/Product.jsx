import { useContext } from "react";

import c from "./Product.module.scss";
import { ProductContext } from "../../../context/ProductContext/ProductContext";
import { Link } from "react-router-dom";

function Product({ product }) {
  const { shopList, setshopList, favoriteList, favoriteListDispatch } =
    useContext(ProductContext);

  return (
    <div className={c.product}>
      <img src={product.img} alt={product.name}></img>
      <div className={c.productName}>
        <Link to={`ProductInfo/${product.id}`}>{product.name}</Link>
      </div>
      <div className={c.produtcPrice}>{product.price}$</div>
      <div className={c.product_button}>
        <i
          style={favoriteList.includes(product) ? { color: "red" } : null}
          onClick={() =>
            favoriteListDispatch({ type: "listOnOff", product: product })
          }
          className={`fa-solid fa-heart ${
            favoriteList.includes(product) && c.scale_animation
          }`}
        ></i>
        <i
          style={
            shopList.map((product) => product.id).includes(product.id)
              ? { color: "rgb(97, 97, 226)" }
              : null
          }
          onClick={() =>
            setshopList(
              shopList.map((i) => i.id).includes(product.id)
                ? shopList.filter((i) => i.id !== product.id)
                : [...shopList, { id: product.id, count: 1 }]
            )
          }
          className={`fa-solid fa-basket-shopping ${
            shopList.map((i) => i.id).includes(product.id)
              ? c.scale_animation
              : null
          }`}
        ></i>
      </div>
    </div>
  );
}
export default Product;
