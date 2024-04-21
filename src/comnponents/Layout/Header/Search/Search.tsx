import c from "./Search.module.scss";

import CategoryBtn from "./CategoryBtn/CategoryBtn";
// import SearchInput from "./SearchInput/SearchInput";
// import SearchBtn from "./SearchBtn/SearchBtn";

function Search() {
  return (
    <div className={c.component}>
      <CategoryBtn />
      {/* <SearchInput /> */}
      {/* <SearchBtn /> */}
    </div>
  );
}

export default Search;
