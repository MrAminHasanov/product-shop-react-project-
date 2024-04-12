import c from "./Footer.module.scss";

import LogoColumn from "./LogoColumn/LogoColumn";
import LinkColumn from "./LinkColumn/LinkColumn";
import EmailColumn from "./EmailColumn/EmailColumn";

function Footer() {
  return (
    <div className={c.component}>
      <div className={c.backgrounde}></div>
      <div className={c.columnContainer}>
        <div className={`${c.logoColumn} ${c.column}`}>
          <LogoColumn />
        </div>
        <div className={`${c.linkColumn} ${c.column}`}>
          <LinkColumn />
        </div>
        <div className={`${c.emailColumn} ${c.column}`}>
          <EmailColumn />
        </div>
      </div>
    </div>
  );
}

export default Footer;
