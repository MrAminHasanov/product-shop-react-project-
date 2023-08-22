import { useSelector } from "react-redux";
import c from "./FavoritePage.module.scss";
import { productList } from "context/ProductContext/ProductContext";
import LikedProduct from "./LikedProduct/LikedProduct";

function FavoritePage() {
  const favoriteList = useSelector((state) => state.favoriteList);
  return (
    <div>
      <div className={c.component}>
        <div className={c.list}>
          {favoriteList.map((id, key) => (
            <LikedProduct
              key={key}
              product={productList.find((product) => product.id === id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
