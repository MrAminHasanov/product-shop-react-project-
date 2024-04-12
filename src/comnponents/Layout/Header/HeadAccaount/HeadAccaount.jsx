import c from "./HeadAccaount.module.scss";
import FavoriteList from "./FavoriteList/FavoriteList";
import { BsBagFill } from "react-icons/bs";

function HeadAccaount({ screenState }) {
  // const activePage = ({ isActive }) => (isActive ? c.active : null);
  return (
    <div
      className={c.component}
      style={
        screenState === "default"
          ? { "--defaultList": "grid", "--mobileList": "none" }
          : { "--mobileList": "grid", "--defaultList": "none" }
      }
    >
      <FavoriteList screenState={screenState} />
      {/* <NavLink to={"/shoping-card"} className={activePage}> */}
      <a href="#">
        <BsBagFill size={20} />
      </a>
      {/* </NavLink> */}
      <p>
        item:<b>$150.000</b>
      </p>
    </div>
  );
}

export default HeadAccaount;
