import React, { useContext } from "react";
import c from "./BlogContainer.module.scss";
import BlogContext from "../../../context/BlogContext/BlogContext";

function BlogContainer() {
  // const BlogContent=useContext(BlogContext);
  // console.log(BlogContent);
  return (
    <div>
      <img src="" alt="" />
      <div className={c.content}>
        <div className={c.Title}></div>
      </div>
    </div>
  );
}
export default BlogContainer;
