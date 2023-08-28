import { useState } from "react";
import { usePathEffect } from "hooks/usePathEffect";

import c from "./HeadProdlist.module.scss";


function HeadProdList() {
  const [lof, setLof] = useState(false);
  usePathEffect(() => {setLof(false)});

  return (
    <div className={c.component}>
      <button onClick={() => setLof(!lof)}>
        <i></i>
        All departaments
        <i
          className={"fa-solid fa-arrow-down"}
          style={{
            transform: lof ? "rotate(-180deg)" : " ",
            transition: "ease all .5s",
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
