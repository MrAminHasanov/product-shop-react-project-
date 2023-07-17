import { createContext } from "react"
import BlogImg from "./img/Blog-img";

export const BlogContext = createContext();

function BlogProvider(props) {
    const blogsContent=
      [
        {title:"Cooking tips make cooking simple", img:BlogImg[1],text:"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",data:" May 4,2019"},
        {title:"6 ways to prepare breakfast for 30", img:BlogImg[2],text:"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",data:" May 16,2018"},
        {title:"Visit the clean farm in the US", img:BlogImg[3],text:"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",data:" Decembere 29,2020"},
        {title:"Tips for keeping fresh vegetables", img:BlogImg[4],text:"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",data:" Octobare 13,2020"},
        {title:"Summery SALE!!", img:BlogImg[0],text:"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",data:" May 30,2021"}
      ]
    ;   
    return (
    <BlogContext.Provider value={{blogsContent}}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogProvider;