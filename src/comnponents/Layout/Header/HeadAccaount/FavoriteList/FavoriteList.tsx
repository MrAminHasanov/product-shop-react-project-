"use client"

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { usePathEffect } from "hooks/usePathEffect";
import { IoMdHeart } from "react-icons/io";

import c from "./FavoriteList.module.scss";

// import FavoriteSummary from "./FavoriteSummary/FavoriteSummary";

function FavoriteList({ screenState }: { screenState: string }) {
  const [openBox, setOpenBox] = useState(false);
  // const navigator = useNavigate();

  const goFavoritePage = () => { };
  // navigator("/shoping-card", { state: "favoList" });

  const favoriteClickAction = (): void => {
    screenState === "default" ? setOpenBox(!openBox) : goFavoritePage();
  };

  // usePathEffect(setOpenBox, false);

  return (
    <div className={c.component}>
      <button onClick={favoriteClickAction}>
        <IoMdHeart size={22} />
      </button>
      {openBox && (
        <>
          <div onClick={() => setOpenBox(false)} className={c.backgrounde}></div>
          <div className={c.favoriteBox}>
            {/* <FavoriteSummary /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default FavoriteList;
