import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import c from "./Carusel.module.scss";
import CaruselBox from "./CaruselBox/CaruselBox";

function Carusel() {
  const { productTypeList } = useContext(ProductContext);
  const [caruselLenght, setCaruselLenght] = useState(4);
  let boxMovingCof;
  const [caruselWidth, setCaruselWidth] = useState("");
  useEffect(() => {
    setCaruselLenght(document.getElementsByClassName(c.carusel_));
  }, []);

  const [boxMoving, setBoxMoving] = useState(0);

  useEffect(() => {
    if (boxMoving === 1) {
      setBoxMoving(caruselLenght);
    } else if (boxMoving === caruselLenght - 1) {
      setBoxMoving(0);
    }
    // const interval = setInterval(() => {
    //   setBoxMoving(boxMoving - 1);
    // }, 3000);
    // return () => clearInterval(interval);
  }, [boxMoving, caruselLenght]);

  return (
    <div className={c.carusel_}>
      <div
        className={`${c.button} ${c.button_before}`}
        onClick={() => setTimeout(() => setBoxMoving(boxMoving + 1), 600)}
      >
        {"<"}
      </div>
      <div className={c.carusel}>
        <div
          className={c.carusel_rotate}
          style={{ left: boxMoving * 24 + "%" }}
        >
          {productTypeList.map((i, j) => (
            <CaruselBox key={j} info={i} />
          ))}
        </div>
      </div>
      <div
        className={`${c.button} ${c.button_after}`}
        onClick={() => setTimeout(() => setBoxMoving(boxMoving - 1), 600)}
      >
        {">"}
      </div>
    </div>
  );
}

export default Carusel;
