"use client"

import { useState } from "react";
import { IoMdHeart } from "react-icons/io";

import c from "./FavoriteList.module.scss";

import FavoriteSummary from "./FavoriteSummary/FavoriteSummary";
import classNames from "classnames";

function FavoriteList({ screenState }: { screenState: string }) {
  const [openBox, setOpenBox] = useState(false);
  const btnClass = classNames({ [c.activeBtn]: openBox })

  const goFavoritePage = () => { };
  const handleFavoriteIconClick = (): void => {
    if (screenState === "default") {
      setOpenBox(!openBox)
    } else {
      goFavoritePage();
    }
  }

  return (
    <div className={c.component}>
      <button onClick={handleFavoriteIconClick}>
        <IoMdHeart className={btnClass} size={22} />
      </button>
      {openBox && (
        <>
          <div className={c.favoriteBox}>
            <FavoriteSummary />
          </div>
        </>
      )}
    </div>
  );
}

export default FavoriteList;
