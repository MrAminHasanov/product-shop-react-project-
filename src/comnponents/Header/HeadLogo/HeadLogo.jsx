import logo from "../../../img/logo(1).png";
import c from "./HeadLogo.module.scss";

function HeadLogo() {
  return (
    <>
      <div className={c.component}>
        <img src={logo} alt="logo"></img>
      </div>
    </>
  );
}

export default HeadLogo;
