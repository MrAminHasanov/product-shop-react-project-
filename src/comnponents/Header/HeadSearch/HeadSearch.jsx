import React from "react";
import c from "./HeadSearch.module.scss"

function HeadSearch() {
  return (
    <div className={c.component}>
      <button>
        All categories
        <i className="fa-solid fa-arrow-down"></i>
      </button> 
      <input placeholder="What do you need?"></input>
      <button>SEARCH</button>
    </div>
  );
}

export default HeadSearch;
