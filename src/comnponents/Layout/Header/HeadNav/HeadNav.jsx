import BurgerButton from "./BurgerButton/BurgerButton";
import c from "./HeadNav.module.scss";
import List from "./List/List";

function HeadNav({setMobileMenuState,screenState}) {
  return (
    <div className={c.component}>
      <BurgerButton setMobileMenuState={setMobileMenuState} screenState={screenState}/>
      <List setMobileMenuState={setMobileMenuState} screenState={screenState}/>
    </div>
  );
}

export default HeadNav;
