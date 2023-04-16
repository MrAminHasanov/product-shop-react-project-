import c from "./BurgerButton.module.scss";

function BurgerButton({setListOnOff, listOnOff}) {
  return (
    <div className={c.button} onClick={() => setListOnOff(!listOnOff)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BurgerButton;
