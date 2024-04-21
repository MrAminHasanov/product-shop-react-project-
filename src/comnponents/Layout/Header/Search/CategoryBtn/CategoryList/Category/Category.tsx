import c from "./Category.module.scss";
import classNames from 'classnames';

function Category({ isCategoryActive, categoryName, setActiveCategory, setCategoryListState }: componentProps) {
    const categoryClass = classNames(c.component, { [c.activeCategory]: isCategoryActive });
    const onHandleClick = () => {
        setActiveCategory(categoryName);
        setCategoryListState(false);
    }

    return (
        <li
            className={categoryClass}>
            <button className={c.categoryBtn} onClick={onHandleClick}>
                {categoryName}
            </button>
        </li>
    )
}

export default Category

interface componentProps {
    isCategoryActive: boolean,
    categoryName: string,
    setActiveCategory: (categoryName: string) => void,
    setCategoryListState: (categoryState: boolean) => void,
}