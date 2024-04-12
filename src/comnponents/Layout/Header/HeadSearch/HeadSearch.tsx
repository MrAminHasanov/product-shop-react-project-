import c from "./HeadSearch.module.scss";

import HeadSearchCategoryBtn from "./HeadSearchCategoryBtn/HeadSearchCategoryBtn";
// import HeadSearchInput from "./HeadSearchInput/HeadSearchInput";
// import HeadSearchButton from "./HeadSearchButton/HeadSearchButton";

function HeadSearch() {
  return (
    <div className={c.component}>
      <HeadSearchCategoryBtn />
      {/* <HeadSearchInput /> */}
      {/* <HeadSearchButton /> */}
    </div>
  );
}

export default HeadSearch;
