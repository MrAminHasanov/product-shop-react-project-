import { createSlice } from "@reduxjs/toolkit";

const initialState = ["aa", "aaa"];

export const ProductFavoriteListSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    toggleToFavorites: (state, { payload: productId }) => {
      if (state.some((id) => id === productId))
        return state.filter((product) => product !== productId);
      state.push(productId);
    },
  },
});

export const { actions, reducer } = ProductFavoriteListSlice;
