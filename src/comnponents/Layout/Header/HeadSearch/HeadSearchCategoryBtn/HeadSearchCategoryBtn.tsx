'use client'

import { useState } from "react";
import c from "./HeadSearchCategoryBtn.module.scss";

import CategoryList from "./CategoryList/CategoryList";

function HeadSearchCategoryBtn() {
  const [categoryListState, setCategoryListState] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // usePathEffect(setCategoryListState, false);

  return (
    <div className={c.component}>
      <button onClick={() => setCategoryListState(!categoryListState)}>
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
