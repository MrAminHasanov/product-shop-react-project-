import React, { useContext, useEffect, useState } from 'react'
import { CaruselContext } from '../../context/CaruselContext/CaruselContext';
import c from './Carusel.module.scss'
import CaruselBox from './CaruselBox/CaruselBox';

function Carusel() {
  const {caruselContent} = useContext(CaruselContext);
  const carlenght=-(caruselContent.length-4);
  const [carRotate,setCarRotate] = useState(0);
  return (
    <div style={{position:"relative"}}>
      <div className={`${c.button} ${c.button_before}`} onClick={() => carRotate!==0?setCarRotate(carRotate + 1):setCarRotate(carlenght)}>{"<"}</div>
      <div className={c.carusel}>
        <div className={c.carusel_rotate} style={{left:carRotate*24+"%"}}>
          {caruselContent.map((i,j) => <CaruselBox key={j} info={i}/>)}
        </div>
      </div>
      <div className={`${c.button} ${c.button_after}`} onClick={() => carRotate!==carlenght?setCarRotate(carRotate - 1):setCarRotate(0)} >{">"}</div>
    </div>
  )
}

export default Carusel