import { Link } from "react-router-dom";
import c from "./ProductImgName.module.scss";

function ProductImgName({ img, id, name }) {
  return (
    <div className={c.component}>
      <img src={img} alt="" />

      <Link
        to={`/shop/product-info/${id}`}
        className={c.productName}
        onClick={() => window.scrollTo(0, 0)}
      >
        {name}
        <div className={c.linkHoverBox}>
          <div className={c.linkHover}>Get more information</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductImgName;
