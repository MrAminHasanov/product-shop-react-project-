import { createContext, useEffect, useState } from "react";
import { productList } from "context/ProductContext/ProductContext";

export const HeadSearchContext = createContext();

function HeadSearchProvider(props) {
  const [searchProduct, setSearchProduct] = useState("");
  const [productCategory, setProductCategory] = useState("All");
  const [filteredSearchProduct, setFilteredSearchProduct] = useState([]);
  const [inputExist, setInputExist] = useState(false);

  useEffect(() => {
    setFilteredSearchProduct(
      productList.filter(
        (product) =>
          product.name
            .toLocaleLowerCase()
            .includes(searchProduct.toLocaleLowerCase()) &&
          (productCategory === "All" || productCategory === product.type)
      )
    );
  }, [searchProduct, productCategory]);
  return (
    <HeadSearchContext.Provider
      value={{
        filteredSearchProduct,
        searchProduct,
        setSearchProduct,
        productCategory,
        setProductCategory,
        inputExist,
        setInputExist,
      }}
    >
      {props.children}
    </HeadSearchContext.Provider>
  );
}

export default HeadSearchProvider;
