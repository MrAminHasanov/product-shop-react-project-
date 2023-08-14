import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as favoriteList } from "Store/ProductFavoriteList/ProductFavoriteList.slice";

const rootActions = {
  ...favoriteList,
};
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
