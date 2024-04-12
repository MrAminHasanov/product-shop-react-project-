import c from "./PriceFilter.module.scss";

import { useContext } from "react";

import { ShopPageContext } from "context/ShopPageContext/ShopPageContext";

function PriceFilter() {
  const { productPrice, setProductPrice } = useContext(ShopPageContext);

  return (
    <div className={c.component}>
      <div className={c.title}>Price</div>
      <div className={c.priceBars}>
        <div className={c.minPrice}>
          <label htmlFor="minPrice">Minimal</label>
          <div className={c.inputBox}> 
            <input onChange={(e) =>setProductPrice([Number(e.target.value), productPrice[1]])} style={{"--minSize": `${productPrice[0]===0?"1":productPrice[0]*100/productPrice[1]}%`}}
            type="range" id="minPrice" min="0" max={productPrice[1]-1} defaultValue={0} />
            <div className={c.priceCounter}>{productPrice[0]}</div>
          </div>
        </div>
        <div className={c.maxPrice}>
          <label htmlFor="maxPrice">Maximal</label>
          <div className={c.inputBox}>
            <input onChange={(e) =>setProductPrice([productPrice[0], Number(e.target.value)])} style={{"--maxSize": `${productPrice[0]===50?"100":(productPrice[1]-productPrice[0])*100/(50-productPrice[0])}%`}}
            type="range" id="maxPrice" min={productPrice[0]-1===-1?"0":productPrice[0]} max="50" defaultValue={50}/>
            <div className={c.priceCounter}>{productPrice[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default PriceFilter;
