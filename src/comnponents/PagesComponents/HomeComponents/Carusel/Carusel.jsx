import { useContext, useEffect, useState } from "react";
import c from "./Carusel.module.scss";

import { ProductContext } from "../../../../context/ProductContext/ProductContext";
import CaruselBox from "./CaruselBox/CaruselBox";

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
  }, [position]);

  const caruselLength = productTypeList.length - caruselColumns;

  useEffect(() => {
    if (position === -1) {
      setPosition(caruselLength);
    } else if (position === caruselLength + 1) {
      setPosition(0);
    }
    const interval = setInterval(() => {
      setPosition(position + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [position, caruselLength]);

  return (
    <div className={c.component}>
      <button
        className={c.button}
        onClick={() => setTimeout(() => setPosition(() => position - 1), 200)}
      >
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
      <button
        className={c.button}
        onClick={() => setTimeout(() => setPosition(() => position + 1), 200)}
      >
        {">"}
      </button>
    </div>
  );
}

export default Carusel;
