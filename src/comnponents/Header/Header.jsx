import c from "./Header.module.scss";
import HeadLogo from "./HeadLogo/HeadLogo";
import HeadNav from "./HeadNav/HeadNav";
import HeadAccaount from "./HeadAccaount/HeadAccaount";
import HeadProdList from "./HeadProdList/HeadProdList";
import HeadSearch from "./HeadSearch/HeadSearch";
import HeadContact from "./HeadContact/HeadContact";
import { useEffect, useState } from "react";

function Header() {
  const [NavState, setNavState] = useState(false);

  return (
    <div className={c.component}>
      <HeadLogo />
      <HeadNav NavState={NavState} setNavState={setNavState}/>
      <HeadAccaount />
      <HeadProdList />
      <HeadSearch />
      <HeadContact />
    </div>
  );
}

export default Header;
