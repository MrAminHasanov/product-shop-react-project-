import logo from "../../../img/logo(1).png";
import c from "./HeadLogo.module.scss";

function HeadLogo() {
  return (
    <>
      <div className={c.logo}>
        <img src={logo} alt="logo"></img>
      </div>
    </>
  );
}

export default HeadLogo;
