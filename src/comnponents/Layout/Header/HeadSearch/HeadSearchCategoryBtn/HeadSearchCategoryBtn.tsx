'use client'

import { useState } from "react";
import c from "./HeadSearchCategoryBtn.module.scss";

import CategoryList from "./CategoryList/CategoryList";

function HeadSearchCategoryBtn() {
  const [categoryListState, setCategoryListState] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleClick = () => setCategoryListState((categoryListState) => !categoryListState);
  return (
    <div className={c.component}>
      <button onClick={handleClick} className={c.mainBtn}>
        {activeCategory === "All" ? "Categories" : activeCategory}
      </button>
      <CategoryList
        activeCategory={activeCategory}
        categoryListState={categoryListState}
        setActiveCategory={setActiveCategory}
        setCategoryListState={setCategoryListState} />
    </div>
  );
}

export default HeadSearchCategoryBtn;
