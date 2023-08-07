import c from "./ProductContent.module.scss";
import { useContext, useEffect } from "react";

import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";
import Product from "comnponents/GlobalComnponets/Product/Product";

function ProductContent() {
  const { sortedProductList, setProductCountInPage } =
    useContext(ShopPageContext);

  useEffect(() => {
    setInterval(() =>
      setProductCountInPage(
        getComputedStyle(document.querySelector(`#main`)).getPropertyValue(
          "--setProductCountInPage"
        ),
        2000
      )
    );
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
