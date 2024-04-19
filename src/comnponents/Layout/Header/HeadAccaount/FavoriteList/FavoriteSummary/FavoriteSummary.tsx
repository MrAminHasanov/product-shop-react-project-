// import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import c from "./FavoriteSummary.module.scss";
// import FavoriteUnbox from "./FavoriteUnbox/FavoriteUnbox";
// import { productList } from "context/ProductContext/ProductContext";
// import { selectFavoriteList } from "Store/UseStateSelector";

function FavoriteSummary() {
  // const favoriteList = useSelector(selectFavoriteList);
  // const favoriteProducts = productList.filter((product) =>
  //   favoriteList.some((favoId) => product.id === favoId)
  // );

  return (
    <div className={c.component}>
      {/* {favoriteProducts.map((product, i) => (
        <FavoriteUnbox key={i} product={product} />
      ))} */}
    </div>
  );
}

export default FavoriteSummary;
