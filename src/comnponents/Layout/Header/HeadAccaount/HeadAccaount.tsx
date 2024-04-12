import c from "./HeadAccaount.module.scss";
import FavoriteList from "./FavoriteList/FavoriteList";
import { BsBagFill } from "react-icons/bs";
import { screenState } from "@/types/type";

function HeadAccaount({ screenState }: { screenState: screenState }) {
  return (
    <div
      className={c.component}
      style={
        screenState === "default"
          ? { "--defaultList": "grid", "--mobileList": "none" } as React.CSSProperties
          : { "--mobileList": "grid", "--defaultList": "none" } as React.CSSProperties
      }
    >
      <FavoriteList screenState={screenState} />
      <a href="#">
        <BsBagFill size={20} />
      </a>
      <p>
        item:<b>$150.000</b>
      </p>
    </div>
  );
}

export default HeadAccaount;
