import { useState } from "react";
import c from "./FavoriteBtn.module.scss";
import FavoriteSummary from "./FavoriteSummary/FavoriteSummary";

function FavoriteBtn() {
  const [openBox, setOpenBox] = useState(false);
  return (
    <div className={c.FavoriteBtn}>
      <button>
        <i
          style={openBox ? { color: "#7fad39" } : null}
          className="fa-solid fa-heart"
          onClick={() => setOpenBox(!openBox)}
        />
      </button>
      {openBox && (
        <div>
          <FavoriteSummary />
        </div>
      )}
    </div>
  );
}

export default FavoriteBtn;
