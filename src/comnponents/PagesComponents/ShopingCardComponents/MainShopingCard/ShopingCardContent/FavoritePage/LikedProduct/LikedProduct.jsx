import c from "./LikedProduct.module.scss";
import ProductImgName from "../../ProductImgName/ProductImgName";
import ShopListTogleBtn from "comnponents/GlobalComnponets/ProductActionsButton/ShopListTogleBtn/ShopListTogleBtn";
import { useActions } from "hooks/useActions";

function LikedProduct({ product }) {
  const { toggleToFavorites } = useActions();
  return (
    <div className={c.component}>
      <ProductImgName id={product.id} name={product.name} img={product.img} />
      <div className={c.actionBox}>
        <ShopListTogleBtn id={product.id} />
        <i
          className={`fa-solid fa-xmark ${c.delete}`}
          onClick={() => toggleToFavorites(product.id)}
        ></i>
      </div>
    </div>
  );
}

export default LikedProduct;
