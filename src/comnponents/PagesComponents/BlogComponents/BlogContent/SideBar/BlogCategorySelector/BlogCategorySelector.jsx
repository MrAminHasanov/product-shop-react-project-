import { useContext } from "react";

import c from "./BlogCategorySelector.module.scss";
import { BlogCategory, BlogContext } from "context/BlogContext/BlogContext";

function BlogCategorySelector() {
  const { selectedBlogCategory, setSelecetedBlogCategory } =
    useContext(BlogContext);

  return (
    <div className={c.component}>
      <div className={c.title}>Categories</div>
      <ul>
        {Object.values(BlogCategory).map((Category, key) => (
          <li key={key}>
            <span
              className={selectedBlogCategory === Category ? c.activeLi : null}
              onClick={() => setSelecetedBlogCategory(Category)}
            >
              {Category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogCategorySelector;
