import c from "./ProductContent.module.scss";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";
import Product from "comnponents/GlobalComnponets/Product/Product";

function ProductContent() {
  const { sortedProductList, setProductCountInPage } =
    useContext(ShopPageContext);
  useEffect(() => {
    const ShopInterval = setInterval(() => {
      setProductCountInPage(
        getComputedStyle(document.querySelector(`#main`)).getPropertyValue(
          "--setProductCountInPage"
        ),
        2000
      );
    });
    return ()=> clearInterval(ShopInterval);
  }, []);
  return (
    <div className={c.component} id="main">
      {sortedProductList.map((e, j) => (
        <Product key={j} product={e} />
      ))}
    </div>
  );
}

export default ProductContent;
