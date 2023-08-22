import { useSelector } from "react-redux";

import c from "./ShopCardPage.module.scss";
import ShopCardProduct from "./ShopCardProduct/ShopCardProduct";
import { productList } from "context/ProductContext/ProductContext";
import { Link } from "react-router-dom";

function ShopCardPage() {
  const shopList = useSelector((state) => state.shopList);

  return (
    <div className={c.component}>
      <div className={c.list}>
        <div className={c.listHeader}>
          <div>Products</div>
          <div className={c.actionHead}>
            <div>Price</div>
            <div></div>
            <div>Quantity</div>
            <div>Total</div>
            <div></div>
          </div>
        </div>
        {Object.keys(shopList).map((id, key) => (
          <ShopCardProduct
            key={key}
            product={productList.find((product) => product.id === Number(id))}
          />
        ))}
      </div>
      <div className={c.footer}>
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
    </div>
  );
}

export default ShopCardPage;
