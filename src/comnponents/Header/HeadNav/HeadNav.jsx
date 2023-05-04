import { useState } from "react";
import BurgerButton from "./BurgerButton/BurgerButton";
import c from "./HeadNav.module.scss";
import List from "./List/List";

function HeadNav() {
  const [listOnOff, setListOnOff] = useState(false);

  return (
    <div className={c.HeadNav}>
      <BurgerButton listOnOff={listOnOff} setListOnOff={setListOnOff} />
      <List />
    </div>
  );
}

export default HeadNav;
