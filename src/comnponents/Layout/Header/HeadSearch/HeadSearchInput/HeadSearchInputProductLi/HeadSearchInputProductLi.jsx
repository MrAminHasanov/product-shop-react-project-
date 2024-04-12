import { useNavigate } from "react-router-dom";
import c from "./HeadSearchInputProductLi.module.scss";

function HeadSearchInputProductLi({ product }) {
  const navigate = useNavigate();
  const onHandlClick = () => {
    // console.log("hi")
    // navigate(`/shop/product-info/${product.id}`)
  }

  return (
    <li className={c.component} onClick={() => console.log("hi")}>
      <span className={c.productName}>
        {product.name} ${product.price}
      </span>
      <img src={product.img} alt="" />
    </li>
  );
}

export default HeadSearchInputProductLi;
