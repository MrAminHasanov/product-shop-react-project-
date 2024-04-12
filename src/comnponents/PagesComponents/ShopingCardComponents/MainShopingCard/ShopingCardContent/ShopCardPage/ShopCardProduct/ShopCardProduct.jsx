import { useSelector } from "react-redux";
import { useActions } from "hooks/useActions";

import c from "./ShopCardProduct.module.scss";
import CardCounter from "comnponents/GlobalComnponets/ProductActionsButton/CardCounter/CardCounter";
import ProductImgName from "../../ProductImgName/ProductImgName";
import FavoriteTogleBtn from "comnponents/GlobalComnponets/ProductActionsButton/FavoriteTogleBtn/FavoriteTogleBtn";

function ShopCardProduct({ product }) {
  const shopList = useSelector((state) => state.shopList);
  const { toggleToShopList } = useActions();
  return (
    <div className={c.component}>
      <ProductImgName img={product.img} id={product.id} name={product.name} />
      <div className={c.productActionBox}>
        <div className={c.productPrice}>${product.price}</div>

        <FavoriteTogleBtn id={product.id} />

        <CardCounter id={product.id} />

        <div className={c.totalPrice}>
          ${product.price * shopList[product.id]}
        </div>
        <i
          onClick={() => toggleToShopList(product.id)}
          className={`fa-solid fa-xmark ${c.productDelete}`}
        ></i>
      </div>
    </div>
  );
}

export default ShopCardProduct;
