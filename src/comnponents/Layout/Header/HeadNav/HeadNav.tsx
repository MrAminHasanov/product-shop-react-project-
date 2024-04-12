import c from "./HeadNav.module.scss";

import BurgerButton from "./BurgerButton/BurgerButton";
import NavList from "./NavList/NavList";
import { screenState } from "@/types/type";


function HeadNav({ screenState }: { screenState: screenState }) {
  return (
    <div className={c.component}>
      <BurgerButton
        // setMobileMenuState={setMobileMenuState}
        screenState={screenState}
      />
      <NavList screenState={screenState} />
    </div>
  );
}

export default HeadNav;
