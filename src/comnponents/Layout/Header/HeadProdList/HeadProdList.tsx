'use client'

import { useState } from "react";
import classNames from "classnames";

import c from "./HeadProdlist.module.scss";

import { CgArrowRight } from "react-icons/cg";
import ProdList from "./ProdList/ProdList";

function HeadProdList() {
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
      <ProdList listState={listState} />
    </div >
  );
}

export default HeadProdList;
