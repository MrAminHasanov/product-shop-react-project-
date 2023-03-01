import React from 'react'
import Carusel from '../../comnponents/Carusel/Carusel'
import c from "./Home.module.scss"

function Home() {
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
        <Carusel/>
      </div>
    </>
  )
}

export default Home