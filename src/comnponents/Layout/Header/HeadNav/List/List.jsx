import { Link } from "react-router-dom";
import c from "./List.module.scss";

function List({screenState}) {
  return (
    <ul
      className={c.component}
      style={screenState === "default" ? {"--defaultList":"flex" , "--mobileList":"none"} : {"--mobileList":"flex" , "--defaultList":"none"}}
    >
      <li><Link to={"/Home"}>HOME</Link></li>
      <li><Link to={"/Shop"}>SHOP</Link></li>
      <li><Link to={"/Pages"}>PAGES</Link></li>
      <li><Link to={"/Blog"}>BLOG</Link></li>
      <li><Link to={"/Contact"}>CONTACT</Link></li>
    </ul>
  );
}

export default List;
