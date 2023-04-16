import { useState } from "react";
import c from "./ProductSection.module.scss";
import ProductSectionContent from "./ProductSectionContent/ProductSectionContent";
import ProductSectionHead from "./ProductSectionHead/ProductSectionHead";

function ProductSection() {
  const [selectedProductType, setSelectedProductType] = useState("All");
  return (
    <div className={c.ProductSection}>
      <ProductSectionHead
        setSelectedProductType={setSelectedProductType}
        selectedProductType={selectedProductType}
      />
      <ProductSectionContent selectedProductType={selectedProductType} />
    </div>
  );
}

export default ProductSection;
