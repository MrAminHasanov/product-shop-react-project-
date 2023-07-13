import React, { useEffect, useState } from 'react'
import c from "./MobileMenu.module.scss"
import MenuContent from './MenuContent/MenuContent'

function MobileMenu({mobileMenuState,setMobileMenuState}) {
  return (
    <div className={c.component}>
        <div className={c.menuBackground}  onClick={()=>setMobileMenuState(false)} ></div>   
        <MenuContent />
    </div>
  )
}

export default MobileMenu