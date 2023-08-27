import SecondHeader from "comnponents/GlobalComnponets/SecondHeader/SecondHeader";
import c from "./BlogDetaileMain.module.scss";
import BlogInformation from "./BlogInformation/BlogInformation";
import RandomBlogs from "./RandomBlogs/RandomBlogs";

function BlogDetaileMain() {
  return (
    <div className={c.component}>
      <SecondHeader title={"Blog Detaile"} />
      <BlogInformation />
      <RandomBlogs />
    </div>
  );
}

export default BlogDetaileMain;
