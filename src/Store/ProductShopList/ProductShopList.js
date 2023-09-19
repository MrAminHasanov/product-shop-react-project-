import { createSlice } from "@reduxjs/toolkit";

const initialState = { 0: 1, 2: 3, 5: 6, 4: 3 };

export const ProductShopListSlice = createSlice({
  name: "shopList",
  initialState,
  reducers: {
    toggleToShopList: (state, { payload: Pid }) => {
      if (Pid in state) {
        delete state[Pid];
      } else {
        state[Pid] = 1;
      }
    },
    incrimentCount: (state, { payload: Pid }) => {
      if (Pid in state) {
        ++state[Pid];
      } else {
        state[Pid] = 1;
      }
    },
    dincrimentCount: (state, { payload: Pid }) => {
      if (Pid in state) {
        if (state[Pid] !== 1) {
          --state[Pid];
        } else {
          delete state[Pid];
        }
      }
    },
  },
});

export const { actions, reducer } = ProductShopListSlice;
