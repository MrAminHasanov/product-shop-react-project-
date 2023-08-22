import { useContext, useEffect, useState } from "react";
import c from "./ProductPageNav.module.scss";
import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";

function ProductPageNav() {
  const { maxProductPage, productsPage, setProductPage } =
    useContext(ShopPageContext);
  const array = [null, null, null, null];
  const [pageButtonPostions, setPageButtonPostions] = useState(0);
  useEffect(() => setPageButtonPostions(0), [maxProductPage]);
  return (
    <div className={c.component} id="List">
      <div className={c.ulBox}>
        {maxProductPage > 4 && pageButtonPostions > 0 && (
          <div
            onClick={() =>
              pageButtonPostions - 1 > -1
                ? setPageButtonPostions(pageButtonPostions - 1)
                : null
            }
          >
            {"<"}
          </div>
        )}
        {maxProductPage > 1 && (
          <ul>
            {array.map(
              (e, i) =>
                i < maxProductPage && (
                  <li
                    key={i}
                    onClick={() => setProductPage(i + pageButtonPostions)}
                    className={
                      productsPage === i + pageButtonPostions
                        ? c.activeLi
                        : null
                    }
                  >
                    {i + 1 + pageButtonPostions}
                  </li>
                )
            )}
          </ul>
        )}
        {maxProductPage > 4 && pageButtonPostions + 4 < maxProductPage && (
          <div
            onClick={() =>
              pageButtonPostions + 4 < maxProductPage
                ? setPageButtonPostions(pageButtonPostions + 1)
                : null
            }
          >
            {">"}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPageNav;
