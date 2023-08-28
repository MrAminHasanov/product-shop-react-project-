import { NavLink } from "react-router-dom";
import c from "./List.module.scss";

function List({ screenState, setMobileMenuState }) {
  const activePage = ({ isActive }) => (isActive ? c.active : null);
  return (
    <ul
      className={c.component}
      style={
        screenState === "default"
          ? { "--defaultList": "flex", "--mobileList": "none" }
          : { "--mobileList": "flex", "--defaultList": "none" }
      }
    >
      <li>
        <NavLink to={"/"} className={activePage}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to={"shop"} className={activePage}>
          SHOP
        </NavLink>
      </li>
      <li>
        <NavLink to={"blog"} className={activePage}>
          BLOG
        </NavLink>
      </li>
      <li>
        <NavLink to={"contact"} className={activePage}>
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
}

export default List;
