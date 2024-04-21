import logo from "../../../../img/logo(1).png";
import c from "./Logo.module.scss";

function Logo() {
  return (
    <>
      <div className={c.component}>
          {/* <Link to={"/"}> */}
            <img src={logo.src} alt="logo"></img>
          {/* </Link> */}
      </div>
    </>
  );
}

export default Logo;
