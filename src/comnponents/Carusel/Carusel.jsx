import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import CaruselBox from "./CaruselBox/CaruselBox";

import c from "./Carusel.module.scss";

function Carusel() {
  const { productTypeList } = useContext(ProductContext);
  const [position, setPosition] = useState(0);
  const [caruselColumns, setCaruselColumns] = useState(0);
  useEffect(() => {
    setCaruselColumns(
      window
      .getComputedStyle(document.querySelector(`.${c.carousel}`))
      .getPropertyValue("--columns")
      );
    } , []);
  const caruselLength=productTypeList.length - caruselColumns;

  const handleClickBack = () => setPosition((prev) => prev - 1);
  const handleClickForward = () => setPosition((prev) => prev + 1);

  useEffect(()=>{
    const length=caruselLength-caruselColumns;
    if(position===-1){
      setPosition(caruselLength);
    }else if(position===caruselLength+1){
      setPosition(0)
    }

  },[position,caruselColumns,caruselLength])
  return (
    <div className={c.component}>
      <button className={c.button} onClick={handleClickBack}>
        {"<"}
      </button>
      <div className={c.carouselWrapper}>
        <ul
          style={{
            "--position": position,
          }}
          className={c.carousel}
        >
          {productTypeList.map((item, index) => (
            <li key={index}>
              <CaruselBox key={item.name} info={item} />
            </li>
          ))}
        </ul>
      </div>
      <button className={c.button} onClick={handleClickForward}>
        {">"}
      </button>
    </div>
  );
}

export default Carusel;
