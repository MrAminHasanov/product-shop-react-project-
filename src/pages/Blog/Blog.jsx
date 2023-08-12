import BlogContent from "comnponents/PagesComponents/BlogComponents/BlogContent/BlogContent"
import c from "./Blog.module.scss"
import SecondHeader from "comnponents/GlobalComnponets/SecondHeader/SecondHeader"

function Blog() {
  return (
    <div className={c.component}>
        <SecondHeader title={"Blog"} text={"News aboute our products"}/>
        <BlogContent/>
    </div>
  )
}

export default Blog