import { useState } from "react";
import c from "./FavoriteBtn.module.scss";
import FavoriteSummary from "./FavoriteSummary/FavoriteSummary";
import { useNavigate } from "react-router-dom";
import { usePathEffect } from "hooks/usePathEffect";

function FavoriteBtn({ screenState }) {
  const [openBox, setOpenBox] = useState(false);
  const navigator = useNavigate();
  const goFavoritePage = () =>
    navigator("/shoping-card", { state: "favoList" });

  const favoriteClickAction = () => {
    screenState === "default" ? setOpenBox(!openBox) : goFavoritePage();
  };
  usePathEffect(() => setOpenBox(false));

  return (
    <div className={c.component}>
      <button>
        <i
          style={openBox ? { color: "#7fad39" } : null}
          className="fa-solid fa-heart"
          onClick={() => favoriteClickAction()}
        />
      </button>
      {openBox && (
        <div onClick={() => setOpenBox(false)} className={c.backgrounde}></div>
      )}
      {openBox && (
        <div className={c.favoriteBox}>
          <FavoriteSummary />
        </div>
      )}
    </div>
  );
}

export default FavoriteBtn;
