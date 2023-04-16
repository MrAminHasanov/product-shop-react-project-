import c from "./List.module.scss";

function List({ listOnOff }) {
  return (
    <ul className={c.List}>
      <li>HOME</li>
      <li>SHOP</li>
      <li>PAGES</li>
      <li>BLOG</li>
      <li>CONTACT</li>
    </ul>
  );
}

export default List;
