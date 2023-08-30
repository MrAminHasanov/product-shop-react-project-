import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import c from "./ShopCardFooter.module.scss";
import { productList } from "context/ProductContext/ProductContext";

function ShopCardFooter() {
  const shopList = useSelector((state) => state.shopList);

  return (
    <div className={c.component}>
      <Link to={"/shop"}>CONTINUE SHOPPING</Link>
      <div className={c.cardTotal}>
        <p>Cart Total</p>
        <hr />
        <ul>
          <li>Total</li>
          <li>
            $
            {Object.entries(shopList).reduce(
              (total, obj) =>
                (total +=
                  Number(obj[1]) *
                  productList.find((product) => product.id === Number(obj[0]))
                    .price),
              0
            )}
          </li>
        </ul>
        <button>PROCED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default ShopCardFooter;
