import { useSelector } from "react-redux";

import c from "./ShopCardPage.module.scss";
import ShopCardProduct from "./ShopCardProduct/ShopCardProduct";
import { productList } from "context/ProductContext/ProductContext";
import ShopCardFooter from "./ShopCardFooter/ShopCardFooter";
import { selectShopList } from "Store/UseStateSelector";

function ShopCardPage() {
  const shopList = useSelector(selectShopList);

  return (
    <div className={c.component}>
      <div className={c.list}>
        <div className={c.listHeader}>
          <div>Products</div>
          <div className={c.actionHead}>
            <div className={c.price}>Price</div>
            <div className={c.favoriteSpace}></div>
            <div className={c.count}>Quantity</div>
            <div className={c.total}>Total</div>
            <div className={c.deleteSpace}></div>
          </div>
        </div>
        {Object.keys(shopList).map((id, key) => (
          <ShopCardProduct
            key={key}
            product={productList.find((product) => product.id === Number(id))}
          />
        ))}
      </div>{" "}
      <ShopCardFooter />
    </div>
  );
}

export default ShopCardPage;
