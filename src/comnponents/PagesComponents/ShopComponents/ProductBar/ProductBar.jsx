import c from "./ProductBar.module.scss";

import ProductContent from "./ProductContent/ProductContent";
import ProductPageNav from "./ProductPageNav/ProductPageNav";

function ProductBar() {
  return (
    <div className={c.component}>
      <div className={c.topBorder}></div>
      <ProductContent />
      <ProductPageNav/>
    </div>
  );
}

export default ProductBar;
