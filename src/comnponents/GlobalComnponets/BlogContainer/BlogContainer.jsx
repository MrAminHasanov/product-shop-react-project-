import c from "./BlogContainer.module.scss";

function BlogContainer({ blogContent, buttonState }) {
  return (
    <div className={c.component} style={{"--page":buttonState?".8s":null}}>
      <img className={c.img} src={blogContent.img} alt=" " />
      <div className={c.content}>
        <div className={c.data}>
          <i className="fa-regular fa-calendar"></i>
          {blogContent.data}
        </div>
        <div className={c.title}>{blogContent.title}</div>
        <div className={c.text}>{"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"}</div>
        {buttonState && (
          <button>
            READ MORE <i className="fa-solid fa-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
  );
}
export default BlogContainer;
