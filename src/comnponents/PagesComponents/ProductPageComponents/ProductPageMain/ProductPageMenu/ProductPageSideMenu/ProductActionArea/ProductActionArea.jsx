import { useActions } from "hooks/useActions";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import c from "./ProductActionArea.module.scss";
import FavoriteTogleBtn from "comnponents/GlobalComnponets/ProductActionsButton/FavoriteTogleBtn/FavoriteTogleBtn";
import ShopListTogleBtn from "comnponents/GlobalComnponets/ProductActionsButton/ShopListTogleBtn/ShopListTogleBtn";
import CardCounter from "comnponents/GlobalComnponets/ProductActionsButton/CardCounter/CardCounter";

function ProductActionArea({ id }) {
  return (
    <div className={c.component}>
      <CardCounter id={id} />
      <ShopListTogleBtn id={id} />
      <FavoriteTogleBtn id={id} />
    </div>
  );
}

export default ProductActionArea;
