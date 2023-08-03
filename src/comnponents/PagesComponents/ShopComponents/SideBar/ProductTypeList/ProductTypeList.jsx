import c from "./ProductTypeList.module.scss";
import { useContext } from "react";

import { ProductContext } from "../../../../../context/ProductContext/ProductContext";
import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";

function ProductTypeList() {
  const { productTypeList } = useContext(ProductContext);
  const {searchType,setSearchType} = useContext(ShopPageContext);

  return (
    <div className={c.component}>
      <div className={c.title}>Product type</div>
      <ul className={c.typeList}>
      <li onClick={()=>setSearchType("All")} className={"All"===searchType?c.active:null}> All</li>
        {
          productTypeList.map((i,j)=>(
            <li key={j} onClick={()=>setSearchType(i.name)} className={i.name===searchType?c.active:null} >{i.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default ProductTypeList;
