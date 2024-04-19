import classNames from "classnames";
import c from "./CategoryList.module.scss";
import { productTypeList } from "@/context/ProductContext/ProductContext"
import DropDown from "@/comnponents/GlobalComnponets/DropDown/DropDown";

function CategoryList({ categoryListState, setActiveCategory, setCategoryListState, activeCategory }: componentProps) {
    const typeList = ["All", ...productTypeList.map((type) => type.name)];
    const categoryClass =
        (type: string): string =>
            classNames(c.category, { [c.activeCategory]: activeCategory === type });

    return (
        <DropDown dropDownAnimationState={categoryListState}>
            <ul className={c.component}>
                {
                    typeList.map((type, key) => (
                        <li
                            key={key}
                            className={categoryClass(type)}>
                            <button onClick={() => setActiveCategory(type)}>
                                {type}
                            </button>
                        </li>
                    ))
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