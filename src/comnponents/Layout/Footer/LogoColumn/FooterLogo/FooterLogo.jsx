import c from "./FooterLogo.module.scss"
import logo from "../../../../../img/logo(1).png"

function FooterLogo() {
  return (
    <div className={c.component}>
        <img src={logo} alt="logog"/>
    </div>
  )
}

export default FooterLogo