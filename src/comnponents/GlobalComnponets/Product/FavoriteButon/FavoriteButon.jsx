import { useActions } from "hooks/useActions";

import c from "./FavoriteButon.module.scss";
import { useSelector } from "react-redux";
import { selectFavoriteList } from "Store/UseStateSelector";

function FavoriteButon({ id }) {
  const { toggleToFavorites } = useActions();  
  const favoriteList = useSelector(selectFavoriteList);

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
