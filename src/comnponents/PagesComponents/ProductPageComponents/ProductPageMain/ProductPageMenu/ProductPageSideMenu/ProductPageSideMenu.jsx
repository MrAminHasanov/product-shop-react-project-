import ProductActionArea from "./ProductActionArea/ProductActionArea";
import c from "./ProductPageSideMenu.module.scss";

function ProductPageSideMenu({ name, price, id }) {
  return (
    <div className={c.component}>
      <div className={c.productNamePrice}>
        <div className={c.productName}>{name}</div>
        <div className={c.productPrice}>${price}</div>
      </div>
      <div className={c.productDescription}>
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
        ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor
        lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit
        amet dui. Proin eget tortor risus.
      </div>
      <ProductActionArea id={id} />
      <hr />
      <div className={c.lists}>
        <ul>
          <li>Availability</li>
          <li>Share on</li>
          <li>Shipping</li>
          <li>Weight</li>
        </ul>
        <ul>
          <li> In Stock</li>
          <li>01 day shipping. Free pickup today</li>
          <li> 0.5 kg</li>
          <li>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductPageSideMenu;
