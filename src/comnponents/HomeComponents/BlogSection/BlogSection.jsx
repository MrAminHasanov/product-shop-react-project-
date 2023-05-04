import React from "react";
import c from "./BlogSection.module.scss";
import Title from "../../GlobalComnponets/Title/Title";

function BlogSection() {
  return (
    <div className={c.body}>
      <Title context={"From The Blog"}/>
    </div>
  );
}

export default BlogSection;