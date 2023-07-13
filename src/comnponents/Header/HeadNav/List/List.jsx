import c from "./List.module.scss";

function List({screenState}) {
  return (
    <ul
      className={c.component}
      style={screenState === "default" ? {"--defaultList":"flex" , "--mobileList":"none"} : {"--mobileList":"flex" , "--defaultList":"none"}}
    >
      <li>HOME</li>
      <li>SHOP</li>
      <li>PAGES</li>
      <li>BLOG</li>
      <li>CONTACT</li>
    </ul>
  );
}

export default List;
