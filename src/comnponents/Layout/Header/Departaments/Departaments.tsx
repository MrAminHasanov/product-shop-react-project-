'use client'

import { useState } from "react";
import classNames from "classnames";

import c from "./Departaments.module.scss";

import { CgArrowRight } from "react-icons/cg";
import List from "./List/List";

function Departaments() {
  const [listState, setListState] = useState(false);
  const handleClick = () => setListState(!listState);
  const iconClass = classNames({ [c.activeIcon]: listState })

  return (
    <div className={c.component}>
      <button onClick={handleClick}>
        All departaments
        <CgArrowRight
          size={22}
          className={iconClass}
        />
      </button>
      <List listState={listState} />
    </div >
  );
}

export default Departaments;
