import c from "./BlogSection.module.scss";
import { useContext } from "react";

import BlogContainer from "../../../GlobalComnponets/BlogContainer/BlogContainer";
import { BlogContext } from "../../../../context/BlogContext/BlogContext";
import Title from "../../../GlobalComnponets/Title/Title";

function BlogSection() {
  const { randomElement } = useContext(BlogContext);

  return (
    <div className={c.component}>
      <Title context={"From The Blog"} />
      <div className={c.blogsBox}>
        {randomElement().map((blog, key) => key < 3 && (
            <div className={c.blogBox} key={key}>
              <BlogContainer blogContent={blog} buttonState={false} />
            </div>
          )
      )}
      </div>
    </div>
  );
}

export default BlogSection;
