import ProductPageMain from "comnponents/PagesComponents/ProductPageComponents/ProductPageMain/ProductPageMain";
import { useSelector } from "react-redux";
import { useActions } from "hooks/useActions";

import c from "./ProductPage.module.scss";

function ProductPage() {
  const { favorites } = useSelector((state) => state);
  const { toggleToFavorites } = useActions();
  return (
    <div className={c.component}>
      <ProductPageMain />
    </div>
  );
}

export default ProductPage;
