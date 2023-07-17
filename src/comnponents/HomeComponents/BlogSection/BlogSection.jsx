import React from "react";
import c from "./BlogSection.module.scss";
import Title from "../../GlobalComnponets/Title/Title";
import BlogContainer from "../../GlobalComnponets/BlogContainer/BlogContainer";
import { useContext } from "react";
import { BlogContext } from "../../../context/BlogContext/BlogContext";

function BlogSection() {
  const { blogsContent } = useContext(BlogContext);
  
  const randomBlogElement = [];
  while (randomBlogElement.length !== 3) {
    let randomElement = Math.floor(Math.random() * blogsContent.length);
    if (!randomBlogElement.includes(randomElement))randomBlogElement.push(randomElement); 
  }

  return (
    <div className={c.component}>
      <Title context={"From The Blog"} />
      <div className={c.blogsBox}>
        {randomBlogElement.map((i,key) => {
          return (
            <div className={c.blogBox} key={key}>
              <BlogContainer blogContent={blogsContent[i]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogSection;
