import React from 'react'
import c from "./CaruselBox.module.scss"

function CaruselBox({info}) {
  return (
    <div className={c.carusel_box} style={{backgroundColor:info.bg}}>
      <img src={info.img} alt={info.name}></img>
      <div>{info.name}</div>
    </div>
  )
}

export default CaruselBox