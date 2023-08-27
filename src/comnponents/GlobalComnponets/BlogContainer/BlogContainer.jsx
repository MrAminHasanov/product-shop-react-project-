import { Link } from "react-router-dom";
import c from "./BlogContainer.module.scss";

function BlogContainer({ blogContent, buttonState }) {
  return (
    <div
      className={c.component}
      style={{ "--page": buttonState ? ".8s" : null }}
    >
      <img className={c.img} src={blogContent.img} alt=" " />
      <div className={c.content}>
        <div className={c.data}>
          <i className="fa-regular fa-calendar"></i>
          {blogContent.data}
        </div>
        <Link
          to={`/blog/blog-info/${blogContent.id}`}
          className={c.title}
          onClick={() => window.scrollTo(0, 0)}
        >
          {blogContent.title}
        </Link>
        <div className={c.text}>
          {
            "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
          }
        </div>
        {buttonState && (
          <Link
            to={`/blog/blog-info/${blogContent.id}`}
            className={c.linkButton}
            onClick={() => window.scrollTo(0, 0)} 
          >
            READ MORE <i className="fa-solid fa-arrow-right"></i>
          </Link>
        )}
      </div>
    </div>
  );
}
export default BlogContainer;
