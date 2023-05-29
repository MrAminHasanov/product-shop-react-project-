import { useContext } from "react";
import { ProductContext } from "../../../../../context/ProductContext/ProductContext";
import c from "./FavoriteSummary.module.scss";
import FavoriteUnbox from "./FavoriteUnbox/FavoriteUnbox";

function FavoriteSummary() {
  const { favoriteList } = useContext(ProductContext);

  return (
    <div className={c.component}>
      {favoriteList.map((product) => (
        <FavoriteUnbox key={product.id} product={product} />
      ))}
    </div>
  );
}

export default FavoriteSummary;
