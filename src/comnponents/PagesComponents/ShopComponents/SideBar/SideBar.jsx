import c from "./SideBar.module.scss";

import ProductTypeList from "./ProductTypeList/ProductTypeList";
import PriceFilter from "./PriceFilter/PriceFilter";

function SideBar() {

  return (
    <div className={c.component}>
      <ProductTypeList />
      <PriceFilter />
    </div>
  );
}

export default SideBar;
