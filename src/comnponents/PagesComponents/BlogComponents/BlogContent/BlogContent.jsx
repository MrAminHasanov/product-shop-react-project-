import c from './BlogContent.module.scss'

import SideBar from './SideBar/SideBar'
import BlogList from './BlogList/BlogList'

function BlogContent() {    
  return (
    <div className={c.component}>
        <SideBar/>
        <BlogList/>
    </div>
  )
}

export default BlogContent