import { useContext } from "react";

import c from "./BlogDataSelect.module.scss";
import { BlogContext } from "context/BlogContext/BlogContext";
import { BlogDate } from "context/BlogContext/BlogContext";

function BlogDataSelect() {
  const { selectedBlogDate, setSelectedBlogDate } = useContext(BlogContext);
  return (
    <div className={c.component}>
      <div className={c.title}>Search by</div>
      <ul>
        {Object.values(BlogDate).map((date, i) => (
          <li
            onClick={() => setSelectedBlogDate(date)}
            className={selectedBlogDate === date ? c.activeLi : null}
            key={i}
          >
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDataSelect;
