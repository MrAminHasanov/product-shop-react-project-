import BurgerButton from "./BurgerButton/BurgerButton";
import c from "./HeadNav.module.scss";
import List from "./List/List";

function HeadNav({NavState,setNavState}) {
  return (
    <div className={c.component}>
      <BurgerButton NavState={NavState} setNavState={setNavState}/>
      <List />
    </div>
  );
}

export default HeadNav;
