'use client'

import c from "./HeadProdlist.module.scss";
import { useState } from "react";

import ProdList from "./ProdList/ProdList";
import { CgArrowRight } from "react-icons/cg";
import classNames from "classnames";

function HeadProdList() {
  const [listState, setListState] = useState(false);
  const handleClick = () => setListState(!listState);
  const iconClass = classNames({ [c.activeIcon]: listState })

  // usePathEffect(setLof, false);

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
