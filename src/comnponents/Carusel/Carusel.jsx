import React from 'react'
import c from './Carusel.module.scss'

function Carusel() {
  return (
  <>
    <div className={c.carusel}>
      <div className={`${c.button} ${c.button_before}`}>{"<"}</div>
      <div className={c.carusel_box}></div>
      <div className={c.carusel_box}></div>
      <div className={c.carusel_box}></div>
      <div className={c.carusel_box}></div>
      <div className={c.carusel_box}></div>
      <div className={c.carusel_box}></div>
      <div className={c.carusel_box}></div>
      <div className={c.carusel_box}></div>
      <div className={`${c.button} ${c.button_after}`}>{">"}</div>
    </div>
  </>
  )
}

export default Carusel