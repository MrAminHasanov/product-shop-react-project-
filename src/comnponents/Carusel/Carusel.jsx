import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductContext';
import c from './Carusel.module.scss'
import CaruselBox from './CaruselBox/CaruselBox';

function Carusel() {
  const { productTypeList } = useContext(ProductContext);
  const carlenght = -(productTypeList.length - 4);
  const [carRotate, setCarRotate] = useState(0);
  return (
    <div className={c.carusel_}>
      <div className={`${c.button} ${c.button_before}`} onClick={() => carRotate !== 0 ? setCarRotate(carRotate + 1) : setCarRotate(carlenght)}>{"<"}</div>
      <div className={c.carusel}>
        <div className={c.carusel_rotate} style={{ left: carRotate * 24 + "%" }}>
          {productTypeList.map((i, j) => <CaruselBox key={j} info={i} />)}
        </div>
      </div>
      <div className={`${c.button} ${c.button_after}`} onClick={() => carRotate !== carlenght ? setCarRotate(carRotate - 1) : setCarRotate(0)} >{">"}</div>
    </div>
  )
}

export default Carusel