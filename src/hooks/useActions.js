import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as favoriteList } from "Store/ProductFavoriteList/ProductFavoriteList.slice";
import { actions as shopList } from "Store/ProductShopList/ProductShopList";

const rootActions = {
  ...favoriteList,
  ...shopList,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
  