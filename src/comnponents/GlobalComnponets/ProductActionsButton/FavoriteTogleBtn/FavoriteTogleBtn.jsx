import { useSelector } from "react-redux";
import c from "./FavoriteTogleBtn.module.scss";
import { useActions } from "hooks/useActions";
import { useEffect, useState } from "react";
import { selectFavoriteList } from "Store/UseStateSelector";

function FavoriteTogleBtn({ id }) {
  const favoriteList = useSelector(selectFavoriteList);
  const { toggleToFavorites } = useActions();

  const [favoriteExist, setFavoriteExist] = useState("");
  useEffect(() => {
    setFavoriteExist(favoriteList.some((info) => info === id));
  }, [favoriteList, id]);

  return (
    <div className={c.component}>
      <button
        onClick={() => toggleToFavorites(id)}
        className={`${c.favoriteToogle} ${
          favoriteExist ? c.activeFavorite : null
        }`}
      >
        <i
          className={`${favoriteExist ? `fa-solid ` : `fa-regular`} fa-heart`}
        ></i>
      </button>
    </div>
  );
}

export default FavoriteTogleBtn;
