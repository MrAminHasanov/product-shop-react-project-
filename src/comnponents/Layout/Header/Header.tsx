import c from "./Header.module.scss";
import Logo from "./Logo/Logo";
import HeadNav from "./HeadNav/HeadNav";
import Account from "./Account/Account";
import Departaments from "./Departaments/Departaments";
import Search from "./Search/Search";
// import Contact from "./Contact/Contact";
// import MobileMenu from "./MobileMenu/MobileMenu";
// import SearchProvider from "context/SearchContext/SearchContext";

function Header() {
  return (
    <div className={c.component}>
      <Logo />
      <HeadNav
        // setMobileMenuState={setMobileMenuState}
        screenState={"default"}
      />

      <Account screenState={"default"} />

      <Departaments />
      <Search />

      {/* <Contact screenState={"default"} />
      {true ? (
        <MobileMenu/>
      ) : null} */}
    </div>
  );
}

export default Header;
