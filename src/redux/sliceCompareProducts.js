import { createSlice } from "@reduxjs/toolkit";

const sliceCompare = createSlice({
  initialState: { data: JSON.parse(localStorage.listCompare || "[]") },
  name: "sliceCompare",
  reducers: {
    addProductCompare: (state, action) => {
      let cheker = state.data.find((item) => +item.id === +action.payload.id);
      if (!cheker) {
        state.data.push(action.payload);
      }
      localStorage.setItem("listCompare", JSON.stringify(state.data));
    },
    removeProductCompare: (state, action) => {
      state.data = state.data.filter((item) => +item.id !== +action.payload);
      localStorage.setItem("listCompare", JSON.stringify(state.data));
    },
  },
});

export const { addProductCompare, removeProductCompare } = sliceCompare.actions;
export default sliceCompare.reducer;
