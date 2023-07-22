import c from "./SecondHeader.module.scss"
import backgroundImg from "../../../img/breadcrumb.jpg.webp"

function SecondHeader({title,text}) {
  return (
    <div className={c.component}>
        <img src={backgroundImg} alt="backgrounde img" />
        <div className={c.textBox}>
            <div className={c.title}>{title}</div>
            <div className={c.text}>{text}</div>
        </div>
    </div>
  );
}

export default SecondHeader;
