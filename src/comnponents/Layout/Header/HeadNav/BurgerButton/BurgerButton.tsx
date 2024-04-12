import { screenState } from "@/types/type";
import c from "./BurgerButton.module.scss";

function BurgerButton({ screenState }: { screenState: screenState }) {
  return (
    <div className={c.component}
      // onClick={() => setMobileMenuState(true)}
      style={
        screenState === "default"
          ? { "--defaultList": "none", "--mobileList": "block" } as React.CSSProperties
          : { "--mobileList": "none", "--defaultList": "block" } as React.CSSProperties
      }
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BurgerButton;
