import { useContext, useState } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductContext'
import CaruselBox from './CaruselBox/CaruselBox'

import c from './Carusel.module.scss'

function Carusel() {
  const { productTypeList } = useContext(ProductContext)
  const [position, setPosition] = useState(0)

  const handleClickBack = () => position !== 0?setPosition((prev) => prev - 1):null
  const handleClickForward = () => setPosition((prev) => prev + 1)
  
  return (
    <div className={c.component}>
      <button className={c.button} onClick={handleClickBack}>
        {'<'}
      </button>
      <div className={c.carouselWrapper}> 
        <ul style={{ '--position': position,'--caruselLenght': productTypeList.length }} className={c.carousel}>
          {productTypeList.map((item,index) => (
            <li key={index}>
              <CaruselBox key={item.name} info={item} />
            </li>
          ))}
        </ul>
      </div>
      <button className={c.button} onClick={handleClickForward}>
        {'>'}
      </button>
    </div>
  )
}

export default Carusel