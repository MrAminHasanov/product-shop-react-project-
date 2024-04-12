import { Link } from "react-router-dom";
import c from "./LinkColumn.module.scss";

function LinkColumn() {
  return (
    <div className={c.component}>
      <div className={c.title}>Useful Links</div>
      <div className={c.linkList}>
        <ul>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Who We Are
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              About Our Shop
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Our Services
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Secure Shopping
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Projects
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Delivery infomation
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Innovation
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Our Sitemap
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LinkColumn;
