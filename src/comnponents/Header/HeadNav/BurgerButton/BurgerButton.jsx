import c from "./BurgerButton.module.scss";

function BurgerButton({NavState,setNavState}) {
  return (
    <div className={c.component} onClick={() => setNavState(!NavState)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BurgerButton;
