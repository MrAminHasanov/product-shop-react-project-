import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import c from "./RandomBlogs.module.scss";
import Title from "comnponents/GlobalComnponets/Title/Title";
import { BlogContext } from "context/BlogContext/BlogContext";
import BlogContainer from "comnponents/GlobalComnponets/BlogContainer/BlogContainer";

function RandomBlogs() {
  const {id} =useParams();
  const { randomElement } = useContext(BlogContext);
  const [randomBlogElement, setRandomBlogElement] = useState(randomElement());
  useEffect(() => setRandomBlogElement(randomElement()), [id,randomElement]);

  return (
    <div className={c.component}>
      <Title context={"Post You May Like"} />
      <div className={c.blogBox}>
        {randomBlogElement.slice(0, 3).map((blog, key) => (
          <div className={c.blog} key={key}>
            <BlogContainer blogContent={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomBlogs;
