import { useParams } from "react-router-dom";

import c from "./ProductPageMain.module.scss";
import SecondHeader from "comnponents/GlobalComnponets/SecondHeader/SecondHeader";
import ProductPageMenu from "./ProductPageMenu/ProductPageMenu";
import ProductDescription from "./ProductDescription/ProductDescription";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

function ProductPageMain() {
  const { id } = useParams();
  return (
    <div className={c.component}>
      <SecondHeader title={"Product's detaile"} />
      <ProductPageMenu id={id} />
      <ProductDescription />
      <RelatedProducts id={id} />
    </div>
  );
}

export default ProductPageMain;
