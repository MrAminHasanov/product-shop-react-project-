import c from "./ProductPageSideMenu.module.scss";

function ProductPageSideMenu({ name, price }) {
  return (
    <div className={c.component}>
      <div className={c.productName}>{name}</div>
      <div className={c.productPrice}>${price}</div>
      <div className={c.productDescription}>
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
        ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor
        lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit
        amet dui. Proin eget tortor risus.
      </div>
    </div>
  );
}

export default ProductPageSideMenu;
