import c from "./CategoryList.module.scss";
import { productTypeList } from "@/context/ProductContext/ProductContext"
import DropDown from "@/comnponents/GlobalComnponets/DropDown/DropDown";
import Category from "./Category/Category";

function CategoryList({ categoryListState, setActiveCategory, setCategoryListState, activeCategory }: componentProps) {
    const typeList = ["All", ...productTypeList.map((type) => type.name)];

    return (
        <DropDown dropDownAnimationState={categoryListState}>
            <ul className={c.component}>
                {
                    typeList.map((categoryName, key) =>
                        <Category
                            setActiveCategory={setActiveCategory}
                            setCategoryListState={setCategoryListState}
                            key={key}
                            isCategoryActive={categoryName === activeCategory}
                            categoryName={categoryName} />)
                }
            </ul>
        </DropDown>
    )
}

export default CategoryList

interface componentProps {
    activeCategory: string,
    categoryListState: boolean,
    setCategoryListState: (state: boolean) => void,
    setActiveCategory: (state: string) => void
}