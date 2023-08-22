import { useSelector } from "react-redux";

import c from "./FavoriteSummary.module.scss";
import FavoriteUnbox from "./FavoriteUnbox/FavoriteUnbox";
import { productList } from "context/ProductContext/ProductContext";

function FavoriteSummary() {
  const { favoriteList } = useSelector((state) => state);
  const favoriteProducts = productList.filter((product) =>
    favoriteList.some((favoId) => product.id === favoId)
  );
  console.log(favoriteList);
  return (
    <div className={c.component}>
      {favoriteProducts.map((product, i) => (
        <FavoriteUnbox key={i} product={product} />
      ))}
    </div>
  );
}

export default FavoriteSummary;
