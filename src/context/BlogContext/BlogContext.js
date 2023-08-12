import { createContext, useEffect, useState } from "react";
import BlogImg from "./img/Blog-img";

export const BlogContext = createContext();
export const BlogCategory = {
  All: "All news",
  Diet: "Diet",
  Sale: "Sale",
  Taveling: "Traveling",
  Winter: "Winter news",
  CookingTips: "Cooking Tips",
  Summery: "Summery news",
};
export const BlogDate = {
  All: "All",
  2017: "2017",
  2018: "2018",
  2019: "2019",
  2020: "2020",
  2021: "2021",
  2022: "2022",
  2023: "2023",
};
function BlogProvider(props) {
  const blogsContent = [
    {
      title: "Cooking tips make cooking simple",
      img: BlogImg[1],
      data: " May 4,2019",
      category: [BlogCategory.CookingTips],
    },
    {
      title: "6 ways to prepare breakfast for 30",
      img: BlogImg[2],
      data: " May 16,2018",
      category: [BlogCategory.CookingTips],
    },
    {
      title: "Visit the clean farm in the US",
      img: BlogImg[3],
      data: " Decembere 29,2023",
      category: [BlogCategory.Taveling],
    },
    {
      title: "Tips for keeping fresh vegetables",
      img: BlogImg[4],
      data: " Octobare 13,2020",
      category: [BlogCategory.CookingTips],
    },
    {
      title: "Summery SALE!!",
      img: BlogImg[0],
      data: " May 30,2022",
      category: [BlogCategory.Summery, BlogCategory.Sale],
    },
    {
      title: "Wintary SALE!!",
      img: BlogImg[5],
      data: " Decambary 10,2019",
      category: [BlogCategory.Winter, BlogCategory.Sale],
    },
    {
      title: "SALE!!Above 70%!",
      img: BlogImg[6],
      data: " Octomber 30,2021",
      category: [BlogCategory.Sale],
    },
    {
      title: "Best diet for summer!",
      img: BlogImg[2],
      data: " March 18,2017",
      category: [BlogCategory.Diet],
    },
  ];

  const [sortedBlogs, setSortedBlogs] = useState("");

  const [selectedBlogDate, setSelectedBlogDate] = useState(BlogDate.All);
  const [selectedBlogCategory, setSelecetedBlogCategory] = useState(
    BlogCategory.All
  );
  const [searchBlog, setSearchBlog] = useState("");
  function randomElement() {
    const randomBlogElement = new Set();
    while (randomBlogElement.size !== blogsContent.length) {
      randomBlogElement.add(Math.floor(Math.random() * blogsContent.length));
    }
    return [...randomBlogElement].map((blog) => blogsContent[blog]);
  }
  useEffect(() => {
    setSortedBlogs(
      blogsContent.filter(
        (blog) =>
          blog.title.includes(searchBlog) &&
          (blog.data.includes(selectedBlogDate) ||
            BlogDate.All === selectedBlogDate) &&
          (blog.category.includes(selectedBlogCategory) ||
            selectedBlogCategory === BlogCategory.All)
      )
    );
  }, [selectedBlogCategory, selectedBlogDate, searchBlog]);

  return (
    <BlogContext.Provider
      value={{
        randomElement,
        selectedBlogCategory,
        setSelecetedBlogCategory,
        selectedBlogDate,
        setSelectedBlogDate,
        searchBlog,
        setSearchBlog,
        sortedBlogs,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
