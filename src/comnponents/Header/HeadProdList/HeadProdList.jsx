import React from "react";
import { useState } from "react";
import c from "./HeadProdlist.module.scss";

function HeadProdList() {
  const [lof, setLof] = useState(true);
  return (
    <div className={c.HeadProdList}>
      <button onClick={() => setLof(!lof)}>
        <i></i>
        All departaments
        <i
          className={"fa-solid fa-arrow-right"}
          style={{
            transform: lof ? "rotate(90deg)" : " ",
            transition: "ease all .2s",
          }}
        ></i>
      </button>
      <ul style={!lof ? { height: 0 } : null}>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
      </ul>
    </div>
  );
}

export default HeadProdList;
