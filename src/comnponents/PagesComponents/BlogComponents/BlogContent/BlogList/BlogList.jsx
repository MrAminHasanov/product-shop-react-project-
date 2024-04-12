import { useContext } from "react";

import c from "./BlogList.module.scss";
import { BlogContext } from "context/BlogContext/BlogContext";
import BlogContainer from "comnponents/GlobalComnponets/BlogContainer/BlogContainer";

function BlogList() {
  const { sortedBlogs } = useContext(BlogContext);
  return (
    <div className={c.component}>
      {[...sortedBlogs].map((blogInfo, key) => (
        <BlogContainer blogContent={blogInfo} key={key} buttonState={true} />
      ))}
    </div>
  );
}

export default BlogList;
