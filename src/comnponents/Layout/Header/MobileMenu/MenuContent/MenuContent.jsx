import {useEffect,useState  } from "react";
import c from "./MenuContent.module.scss";
import HeadLogo from "../../HeadLogo/HeadLogo";
import HeadAccaount from "../../HeadAccaount/HeadAccaount";
import HeadNav from "../../HeadNav/HeadNav";
import HeadContact from "../../HeadContact/HeadContact";

function MenuContent() {
  const [menuPosition, setMenuPosition] = useState("-270PX");
  useEffect(() => setMenuPosition("0PX"), []);
  return (
    <div className={c.component} style={{ left: menuPosition }}>
      <HeadLogo />
      <HeadAccaount screenState={"mobileMenu"} />
      <HeadNav screenState={"mobileMenu"} />
      <HeadContact />
    </div>
  );
}

export default MenuContent;
