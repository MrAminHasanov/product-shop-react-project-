import c from "./HeadAccaount.module.scss";
import FavoriteBtn from "./FavoriteBtn/FavoriteBtn";
import { NavLink } from "react-router-dom";

function HeadAccaount({ screenState }) {
  const activePage = ({ isActive }) => (isActive ? c.active : null);
  return (
    <div
      className={c.component}
      style={
        screenState === "default"
          ? { "--defaultList": "grid", "--mobileList": "none" }
          : { "--mobileList": "grid", "--defaultList": "none" }
      }
    >
      <FavoriteBtn screenState={screenState} />
      <NavLink to={"/shoping-card"} className={activePage}>
        <i className={`fa-solid fa-bag-shopping `}></i>
      </NavLink>
      <p>
        item:<b>$150.000</b>
      </p>
    </div>
  );
}

export default HeadAccaount;
