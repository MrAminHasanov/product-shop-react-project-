import c from "./LogoColumn.module.scss"

import FooterLogo from "./FooterLogo/FooterLogo"

function LogoColumn() {
  return (
    <div className={c.component}>
      <FooterLogo/>
      <div className={c.contacts}>
        <div className={c.contact}>Address: 60-49 Road 11378 New York</div>
        <div className={c.contact}>Phone: +65 11.188.888</div>
        <div className={c.contact}>Email: hello@colorlib.com</div>
      </div>
    </div>
  )
}

export default LogoColumn