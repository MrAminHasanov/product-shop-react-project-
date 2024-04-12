import c from "./List.module.scss";

function List({ screenState }) {
  // const activePage = ({ isActive }) => (isActive ? c.active : null);
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
        {/* <NavLink to={"/"} className={activePage}> */}
        <a href="#">
          HOME
        </a>
        {/* </NavLink> */}
      </li>
      <li>
        {/* <NavLink to={"shop"} className={activePage}> */}
        <a href="#">
          SHOP
        </a>
        {/* </NavLink> */}
      </li>
      <li>
        {/* <NavLink to={"blog"} className={activePage}> */}
        <a href="#">
          BLOG
        </a>
        {/* </NavLink> */}
      </li>
      <li>
        {/* <NavLink to={"contact"} className={activePage}> */}
        <a href="#">
          CONTACT
        </a>
        {/* </NavLink> */}
      </li>
    </ul>
  );
}

export default List;
