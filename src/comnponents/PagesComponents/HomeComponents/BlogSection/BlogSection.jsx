import c from "./BlogSection.module.scss";
import { useContext } from "react";

import BlogContainer from "../../../GlobalComnponets/BlogContainer/BlogContainer";
import { BlogContext } from "../../../../context/BlogContext/BlogContext";
import Title from "../../../GlobalComnponets/Title/Title";

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
