import { useContext,  useState } from "react";
import c from "./ProductPageNav.module.scss";
import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";

function ProductPageNav() {
  const { maxProductPage, productsPage, setProductPage } =
    useContext(ShopPageContext);
  const array = [null, null, null, null];
  const [pageButtonPostions, setPageButtonPostions] = useState(0);

  return (
    <div className={c.component}>
      <div className={c.ulBox}>
        {maxProductPage > 4 ? (
          <div
            onClick={() =>
              pageButtonPostions - 1 > -1
                ? setPageButtonPostions(pageButtonPostions - 1)
                : null
            }
          >
            {"<"}
          </div>
        ) : null}
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
        {maxProductPage > 4 && (
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
