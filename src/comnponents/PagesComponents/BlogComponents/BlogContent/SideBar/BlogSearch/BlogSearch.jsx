import { useContext } from "react";

import c from "./BlogSearch.module.scss";
import { BlogContext } from "context/BlogContext/BlogContext";

function BlogSearch() {
  const {setSearchBlog} = useContext(BlogContext)
  return (
    <div className={c.component}>
      <div className={c.inputBar}>
        <input onChange={(e)=> setSearchBlog(e.target.value)} placeholder="Search..." type="text" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}

export default BlogSearch;
