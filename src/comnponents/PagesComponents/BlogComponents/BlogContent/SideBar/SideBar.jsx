import c from "./SideBar.module.scss";

import BlogSearch from "./BlogSearch/BlogSearch";
import BlogCategorySelector from "./BlogCategorySelector/BlogCategorySelector";
import BlogDataSelect from "./BlogDateSelect/BlogDataSelect";

function SideBar() {
  return (
    <div className={c.component}>
      <BlogSearch />
      <BlogCategorySelector />
      <BlogDataSelect />
    </div>
  );
}

export default SideBar;
