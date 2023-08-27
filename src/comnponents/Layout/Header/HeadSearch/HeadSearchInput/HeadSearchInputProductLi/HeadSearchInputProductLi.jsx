import { Link } from "react-router-dom";
import c from "./HeadSearchInputProductLi.module.scss";

function HeadSearchInputProductLi({ product }) {
  return (
    <li className={c.component}>
      <Link className={c.productName} to={`/shop/product-info/${product.id}`}>
        {product.name} ${product.price}
      </Link>
      <img src={product.img} alt="" />
    </li>
  );
}

export default HeadSearchInputProductLi;
