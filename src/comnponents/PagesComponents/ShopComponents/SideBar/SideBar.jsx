import c from "./SideBar.module.scss";

import { useState } from "react";

import ProductTypeList from "./ProductTypeList/ProductTypeList";
import PriceFilter from "./PriceFilter/PriceFilter";
import SearchBar from "./SearchBar/SearchBar";

function SideBar() {
  const [filterState, setFilterState] = useState(false);
  return (
    <div className={c.component}>
      <div
        className={c.filterResizer}
        onClick={() => setFilterState(!filterState)}
      >
        <span>
          Product Filter{" "}
          <i
            className={`fa-solid fa-arrow-down`}
            style={filterState ? { transform: "rotate(-180deg)" } : null}
          ></i>
        </span>
        <div className={c.backgrounde}></div>
      </div>

      <div
        className={c.filterConatiner}
        style={filterState ? { height: "0px" } : null}
      >
        <SearchBar />
        <ProductTypeList />
        <PriceFilter />
      </div>
    </div>
  );
}

export default SideBar;
