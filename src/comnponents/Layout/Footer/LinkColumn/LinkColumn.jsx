import { Link } from "react-router-dom";
import c from "./LinkColumn.module.scss";

function LinkColumn() {
  return (
    <div className={c.component}>
      <div className={c.title}>Useful Links</div>
      <div className={c.linkList}>
        <ul>
          <li>
            <Link to={"/contact"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Who We Are</Link>
          </li>
          <li>
            <Link to={"/contact"}>About Our Shop</Link>
          </li>
          <li>
            <Link to={"/contact"}>Our Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Secure Shopping</Link>
          </li>
          <li>
            <Link to={"/contact"}>Projects</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/contact"}>Delivery infomation</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/contact"}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={"/contact"}>Innovation</Link>
          </li>
          <li>
            <Link to={"/contact"}>Our Sitemap</Link>
          </li>
          <li>
            <Link to={"/contact"}>Testimonials</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LinkColumn;
