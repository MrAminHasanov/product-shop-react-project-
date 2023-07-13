import { useEffect, useState } from "react";

import c from "./Header.module.scss";
import HeadLogo from "./HeadLogo/HeadLogo";
import HeadNav from "./HeadNav/HeadNav";
import HeadAccaount from "./HeadAccaount/HeadAccaount";
import HeadProdList from "./HeadProdList/HeadProdList";
import HeadSearch from "./HeadSearch/HeadSearch";
import HeadContact from "./HeadContact/HeadContact";
import MobileMenu from "./MobileMenu/MobileMenu";

function Header() {
  const [mobileMenuState, setMobileMenuState] = useState(true);

  return (
    <div className={c.component}>
      <HeadLogo />
      <HeadNav setMobileMenuState={setMobileMenuState} screenState={"default"}/>
      <HeadAccaount screenState={"default"}/>
      <HeadProdList />
      <HeadSearch />
      <HeadContact screenState={"default"}/>
      {
        mobileMenuState ? (
          <MobileMenu
            setMobileMenuState={setMobileMenuState}
            mobileMenuState={mobileMenuState}
          />
        ) : null
      }
    </div>
  );
}

export default Header;
