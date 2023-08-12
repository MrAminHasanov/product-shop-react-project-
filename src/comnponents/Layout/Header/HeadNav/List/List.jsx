import { NavLink } from "react-router-dom";
import c from "./List.module.scss";

function List({screenState}) {
  const activePage = ({isActive}) => isActive ? c.active: null ;
  return (
    <ul
      className={c.component}
      style={screenState === "default" ? {"--defaultList":"flex" , "--mobileList":"none"} : {"--mobileList":"flex" , "--defaultList":"none"}}
    >
      <li><NavLink to={"/"} className={activePage}>HOME</NavLink></li>
      <li><NavLink to={"Shop"} className={activePage}>SHOP</NavLink></li>
      <li><NavLink to={"Blog"} className={activePage}>BLOG</NavLink></li>
      <li><NavLink to={"Contact"} className={activePage}>CONTACT</NavLink></li>
    </ul>
  );
}

export default List;
