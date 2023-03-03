import React, { useContext } from 'react'
import Carusel from '../../comnponents/Carusel/Carusel'
import Product from '../../comnponents/Product/Product'
import { ProductContext } from '../../context/ProductContext/ProductContext'
import c from "./Home.module.scss"

function Home() {
  const { productList } = useContext(ProductContext);
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
          <h2>Featured Product</h2>
          <ul>
            <li>All</li>
            <li>Oranges</li>
            <li>Fresh Meat</li>
            <li>Vegetables</li>
            <li>Fastfood</li>
          </ul>
        </div>
        <div className={c.bar_3_content}>
          {
            productList.map(product => <Product product={product}/>)
          }
        </div>
      </div>
    </>
  )
}

export default Home