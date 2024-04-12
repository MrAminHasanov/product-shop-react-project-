import c from "./Shop.module.scss";

import SecondHeader from "../../comnponents/GlobalComnponets/SecondHeader/SecondHeader";
import SideBar from "../../comnponents/PagesComponents/ShopComponents/SideBar/SideBar";
import ProductBar from "../../comnponents/PagesComponents/ShopComponents/ProductBar/ProductBar";

import ShopPageProvider from "context/ShopPageContext/ShopPageContext";

function Shop() {
  return (
    <ShopPageProvider>
      <div className="ShopPage">
        <SecondHeader title={"Organi Shop"} text={"Shop"} />
        <div className={c.shopContent}>
          <div className={c.sideBar}>
            <SideBar />
          </div>
          <div className={c.productBar}>
            <ProductBar />
          </div>
        </div>
      </div>
    </ShopPageProvider>
  );
}

export default Shop;
