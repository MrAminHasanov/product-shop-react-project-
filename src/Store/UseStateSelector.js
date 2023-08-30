import { createSelector } from "@reduxjs/toolkit";

export const selectFavoriteList = (state) => state.favoriteList;
export const selectShopList = (state) => state.shopList;

export const selectFavoAndShopList = createSelector(
  [selectFavoriteList, selectShopList],
  (favoriteList, shopList) => {
    if (shopList === "all") return favoriteList;

    if (shopList === "completed") {
      return favoriteList.filter((favorite) => favorite.completed);
    }

    return favoriteList.filter((favorite) => !favorite.completed);
  }
);
