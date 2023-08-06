import { createContext, useContext, useEffect, useState } from "react";

export const ShopPageContext = createContext();

function ShopPageProvider(props) {
  const [searchType, setSearchType] = useState("All");
  const [productPrice, setProductPrice] = useState([0,50]);
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <ShopPageContext.Provider
      value={{ searchType, setSearchType, productPrice, setProductPrice,searchProduct, setSearchProduct }}
      >
      {props.children}
    </ShopPageContext.Provider>
  );
}

export default ShopPageProvider;
