import c from "./BlogContainer.module.scss";

function BlogContainer({blogContent}) {
  return (
    <div className={c.component}>
      <img className={c.img} src={blogContent.img} alt=" "/>
      <div className={c.content}>
        <div className={c.data}><i className="fa-regular fa-calendar"></i>{blogContent.data}</div>
        <div className={c.title}>{blogContent.title}</div>
        <div className={c.text}>{blogContent.text}</div>
      </div>
    </div>
  );
}
export default BlogContainer;
