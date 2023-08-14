import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteListReducer } from "./ProductFavoriteList/ProductFavoriteList.slice";

const reducers = combineReducers({
  favorites: favoriteListReducer,
});

export const store = configureStore({
  reducer: reducers,
});
