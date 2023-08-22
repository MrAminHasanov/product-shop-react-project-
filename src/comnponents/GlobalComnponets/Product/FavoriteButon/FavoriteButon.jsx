import { useActions } from "hooks/useActions";

import c from "./FavoriteButon.module.scss";
import { useSelector } from "react-redux";

function FavoriteButon({ id }) {
  const { toggleToFavorites } = useActions();
  const { favoriteList } = useSelector((state) => state);
  return (
    <div className={c.component}>
      <i
        onClick={() => toggleToFavorites(id)}
        className={`fa-solid fa-heart
        ${favoriteList.some((listId) => listId === id) ? c.activeIcon : null}`}
      ></i>
    </div>
  );
}

export default FavoriteButon;
