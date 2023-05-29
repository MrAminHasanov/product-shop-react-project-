import React from "react";
import c from "./BlogSection.module.scss";
import Title from "../../GlobalComnponets/Title/Title";

function BlogSection() {
  return (  
    <div className={c.component}>
      <Title context={"From The Blog"}/>
      <div>

      </div>
    </div>
  );
}

export default BlogSection;