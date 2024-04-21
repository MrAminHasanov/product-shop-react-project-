import {useEffect,useState  } from "react";
import c from "./MenuContent.module.scss";
import Logo from "../../Logo/Logo";
import Account from "../../Account/Account";
import HeadNav from "../../HeadNav/HeadNav";
import Contact from "../../Contact/Contact";

function MenuContent() {
  const [menuPosition, setMenuPosition] = useState("-270PX");
  useEffect(() => setMenuPosition("0PX"), []);
  return (
    <div className={c.component} style={{ left: menuPosition }}>
      <Logo />
      <Account screenState={"mobileMenu"} />
      <HeadNav screenState={"mobileMenu"} />
      <Contact />
    </div>
  );
}

export default MenuContent;
