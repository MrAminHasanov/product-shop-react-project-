import c from "./BurgerButton.module.scss";

function BurgerButton({ screenState }) {
  return (
    <div className={c.component}
      // onClick={() => setMobileMenuState(true)}
      style={screenState === "default" ? { "--defaultList": "none", "--mobileList": "block" } : { "--mobileList": "none", "--defaultList": "block" }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BurgerButton;
