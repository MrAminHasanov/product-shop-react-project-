import React from "react";
import c from "./BlogSection.module.scss";
import Title from "../../GlobalComnponets/Title/Title";
import BlogContainer from "../../GlobalComnponets/BlogContainer/BlogContainer";

function BlogSection() {
  return (  
    <div className={c.component}>
      <Title context={"From The Blog"}/>
      <div>
        <BlogContainer/>
      </div>
    </div>
  );
}

export default BlogSection;