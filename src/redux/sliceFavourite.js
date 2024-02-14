import { createSlice } from "@reduxjs/toolkit";

const sliceFavourite = createSlice({
  initialState: { data: JSON.parse(localStorage.listFavourite || "[]") },
  name: "sliceFavourite",
  reducers: {
    addProductToFavourite: (state, action) => {
      let cheker = state.data.find((item) => +item.id === +action.payload.id);
      if (!cheker) {
        state.data.push(action.payload);
      }
      localStorage.setItem("listFavourite", JSON.stringify(state.data));
    },
    removeProductFromFavourite: (state, action) => {
      state.data = state.data.filter((item) => +item.id !== +action.payload);
      localStorage.setItem("listFavourite", JSON.stringify(state.data));
    },
    clearFavourite: (state, action) => {
      state.data = [];
      localStorage.setItem("listFavourite", JSON.stringify(state.data));
    },
  },
});

export const {
  addProductToFavourite,
  removeProductFromFavourite,
  clearFavourite,
} = sliceFavourite.actions;
export default sliceFavourite.reducer;
