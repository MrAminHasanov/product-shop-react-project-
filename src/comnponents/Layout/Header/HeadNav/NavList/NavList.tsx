import { screenState } from "@/types/type";
import c from "./NavList.module.scss";

function NavList({ screenState }: { screenState: screenState }) {
  return (
    <ul
      className={c.component}
      style={
        screenState === "default"
          ? { "--defaultList": "flex", "--mobileList": "none" } as React.CSSProperties
          : { "--mobileList": "flex", "--defaultList": "none" } as React.CSSProperties
      }
    >
      <li>
        <a href="#">
          HOME
        </a>
      </li>
      <li>
        <a href="#">
          SHOP
        </a>
      </li>
      <li>
        <a href="#">
          BLOG
        </a>
      </li>
      <li>
        <a href="#">
          CONTACT
        </a>
      </li>
    </ul>
  );
}

export default NavList;
