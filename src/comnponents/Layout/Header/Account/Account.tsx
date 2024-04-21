import c from "./Account.module.scss";
import FavoriteList from "./FavoriteList/FavoriteList";
import { BsBagFill } from "react-icons/bs";
import { screenState } from "@/types/type";

function Account({ screenState }: { screenState: screenState }) {
  return (
    <div
      className={c.component}
      style={
        {
          "--defaultList": screenState === "default" ? "grid" : "none",
          "--mobileList": screenState === "mobile" ? "grid" : "none"
        } as React.CSSProperties
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

export default Account;
