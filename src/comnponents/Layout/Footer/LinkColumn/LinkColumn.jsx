import c from "./LinkColumn.module.scss";

function LinkColumn() {
  return (
    <div className={c.component}>
      <div className={c.title}>Useful Links</div>
      <div className={c.linkList}>
        <ul>
          <li>About Us</li>
          <li>Who We Are</li>
          <li>About Our Shop</li>
          <li>Our Services</li>
          <li>Secure Shopping</li>
          <li>Projects</li>
        </ul>
        <ul>
          <li>Delivery infomation</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Innovation</li>
          <li>Our Sitemap</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </div>
  );
}

export default LinkColumn;
