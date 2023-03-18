import React, { useContext, useState } from 'react'
import Carusel from '../../comnponents/Carusel/Carusel'
import Product from '../../comnponents/Product/Product'
import { ProductContext } from '../../context/ProductContext/ProductContext'
import c from "./Home.module.scss"

function Home() {
  const { productList, productTypeList,favoriteList, setFavoriteList,shopList,setshopList } = useContext(ProductContext);
  const [catgSelect_bar3, setCatSelect_bar3] = useState("All");
  return (
    <>
      <div className={c.bar_1}>
        <div className={c.bar_1_box}>
          <div className={c.bar_1_box_1}>FRUIT FRESH</div>
          <div className={c.bar_1_box_2}>Vegetable<br></br> 100% Organic</div>
          <div className={c.bar_1_box_3}>Free Pickup and Delivery Available</div>
          <div className={c.bar_1_box_4}><button>SHOP NOW</button></div>
        </div>
      </div>
      <div className={c.bar_2}>
        <Carusel />
      </div>
      <div className={c.bar_3}>
        <div className={c.bar_3_head}>
          <h2 className={c.line}>Featured Product</h2>
          <ul>
            <li className={catgSelect_bar3==="All" ? c.line:null} onClick={() => setCatSelect_bar3("All")}>All</li>
            {
              productTypeList.map((i, j) => <li key={j} className={catgSelect_bar3===i.name ? c.line:null} onClick={() => setCatSelect_bar3(i.name)}>{i.name}</li>)
            }
          </ul>
        </div>
        <div className={c.bar_3_content}>
          {
            productList.map(product => <Product key={product.id} product={product} shopList={shopList} favoriteList={favoriteList} setFavoriteList={setFavoriteList} setshopList={setshopList} visability={(catgSelect_bar3 === product.type || catgSelect_bar3 === "All") ? undefined:0}/> )
          }
        </div>
      </div>
    </>
  )
}

export default Home