import c from "./Header.module.scss";
import HeadLogo from "./HeadLogo/HeadLogo";
import HeadNav from "./HeadNav/HeadNav";
import HeadAccaount from "./HeadAccaount/HeadAccaount";
import HeadProdList from "./HeadProdList/HeadProdList";
import HeadSearch from "./HeadSearch/HeadSearch";
import HeadContact from "./HeadContact/HeadContact";

function Header() {
  return (
    <div className={c.body}>
      <HeadLogo />
      <HeadNav />
      <HeadAccaount />
      <HeadProdList />
      <HeadSearch />
      <HeadContact/>
    </div>
  );
}

export default Header;
