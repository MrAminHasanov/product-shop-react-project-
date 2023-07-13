import React from "react";
import c from "./HeadSearch.module.scss";

function HeadSearch() {
  return (
    <div className={c.component}>
      <button className={c.categorieBT}>
        <div className={c.title}>Categories</div>
        <i className={`fa-solid fa-arrow-down ${c.icon}`}></i>
        <i className={`fa-solid fa-caret-down ${c.mobilIcon}`}></i>
      </button>
      <input placeholder="What do you need?"></input>
      <button className={c.searchBT}>
        <div className={c.title}>SEARCH</div>
        <i className={`fa-solid fa-magnifying-glass ${c.mobilIcon}`}></i>
      </button>
    </div>
  );
}

export default HeadSearch;
