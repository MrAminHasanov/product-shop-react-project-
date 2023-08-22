import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteListReducer } from "./ProductFavoriteList/ProductFavoriteList.slice";
import { reducer as shopListReducer } from "./ProductShopList/ProductShopList";

const reducers = combineReducers({
  favoriteList: favoriteListReducer,
  shopList: shopListReducer,
});

export const store = configureStore({
  reducer: reducers,
});

