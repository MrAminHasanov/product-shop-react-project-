import { createContext, useContext, useEffect, useState } from "react";

export const ShopPageContext = createContext();

function ShopPageProvider(props) {
  const [searchType, setSearchType] = useState("All");
  const [productPrice, setProductPrice] = useState([1,50]);
  
  return (
    <ShopPageContext.Provider
      value={{ searchType, setSearchType, productPrice, setProductPrice }}
      >
      {props.children}
    </ShopPageContext.Provider>
  );
}

export default ShopPageProvider;
