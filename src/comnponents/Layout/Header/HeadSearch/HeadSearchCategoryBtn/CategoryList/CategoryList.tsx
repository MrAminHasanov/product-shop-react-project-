import c from "./CategoryList.module.scss";
import { productTypeList } from "@/context/ProductContext/ProductContext"

function CategoryList(
    { categoryListState, setActiveCategory, setCategoryListState, activeCategory }:
        {
            activeCategory: string,
            categoryListState: boolean,
            setCategoryListState: (state: boolean) => void,
            setActiveCategory: (state: string) => void
        }
) {
    const typeList = ["All", ...productTypeList.map((type) => type.name)];

    return (
        <ul
            className={`${c.component} ${categoryListState ? c.activeUl : null}`}
        >
            {typeList.map((type, key) => (
                <li
                    key={key}
                    className={`${activeCategory === type ? c.activeLi : null}`}
                    onClick={() => setActiveCategory(type)}>
                    {type}
                </li>
            ))}
        </ul>
    )
}

export default CategoryList