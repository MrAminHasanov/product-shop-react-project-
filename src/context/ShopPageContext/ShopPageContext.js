import { createContext, useEffect, useState } from "react";

import { productList } from "context/ProductContext/ProductContext";
import { useLocation } from "react-router-dom";
export const ShopPageContext = createContext();

function ShopPageProvider(props) {
  const importedState = useLocation().state;
  const startState = {
    searchType: "All",
    searchProduct: "",
  };
  // Product filter variable
  const [searchType, setSearchType] = useState(startState.searchType);
  const [searchProduct, setSearchProduct] = useState(startState.searchProduct);
  const [productPrice, setProductPrice] = useState([0, 50]);
  const [sortedProductList, setSortedProductList] = useState([]);
  // Product page variable
  const [productsPage, setProductPage] = useState(0);
  const [maxProductPage, setMaxProductPage] = useState([]);
  const [productCountInPage, setProductCountInPage] = useState(12);

  useEffect(
    () => setProductPage(0),
    [searchType, productPrice, maxProductPage]
  );

  useEffect(() => {
    const filteredProducts = productList.filter(
      (product) =>
        (searchType === "All" || searchType === product.type) &&
        productPrice[0] <= product.price &&
        productPrice[1] >= product.price &&
        product.name.toLowerCase().includes(searchProduct.toLocaleLowerCase())
    );

    setMaxProductPage(Math.ceil(filteredProducts.length / productCountInPage));

    setSortedProductList(
      filteredProducts.slice(
        productsPage * productCountInPage,
        (productsPage + 1) * productCountInPage
      )
    );
  }, [
    searchType,
    productPrice,
    productsPage,
    productCountInPage,
    searchProduct,
  ]);

  return (
    <ShopPageContext.Provider
      value={{
        searchType,
        setSearchType,
        productPrice,
        setProductPrice,
        searchProduct,
        setSearchProduct,
        productsPage,
        setProductPage,
        maxProductPage,
        sortedProductList,
        setProductCountInPage,
      }}
    >
      {props.children}
    </ShopPageContext.Provider>
  );
}

export default ShopPageProvider;
