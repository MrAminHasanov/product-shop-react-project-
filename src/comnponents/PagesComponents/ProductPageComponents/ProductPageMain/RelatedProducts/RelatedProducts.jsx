import c from "./RelatedProducts.module.scss";
import Product from "comnponents/GlobalComnponets/Product/Product";
import Title from "comnponents/GlobalComnponets/Title/Title";
import { randomProducts } from "context/ProductContext/ProductContext";

function RelatedProducts({ id }) {
  const randomFilteredProducts = [...randomProducts(Number(id))];
  return (
    <div className={c.component}>
      <Title context={"Related Products"} />
      <div className={c.prodyctContainer}>
        {randomFilteredProducts.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
