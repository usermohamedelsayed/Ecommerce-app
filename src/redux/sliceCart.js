import { createSlice } from "@reduxjs/toolkit";

const sliceCart = createSlice({
  initialState: { data: JSON.parse(localStorage.listCart || "[]") },
  name: "sliceCart",
  reducers: {
    addProductToCart: (state, action) => {
      let productFound = state.data.find(
        (item) => +item.id === +action.payload.id
      );
      if (productFound) {
        productFound.amount++;
      } else {
        state.data.push({ ...action.payload, amount: 1 });
      }
      localStorage.setItem("listCart", JSON.stringify(state.data));
    },
    removeProductFromCart: (state, action) => {
      state.data = state.data.filter((item) => +item.id !== +action.payload);
      localStorage.setItem("listCart", JSON.stringify(state.data));
    },
    increaseProductAmount: (state, action) => {
      state.data.find((item) => +item.id === +action.payload).amount++;
      localStorage.setItem("listCart", JSON.stringify(state.data));
    },
    decreaseProductAmount: (state, action) => {
      let getAmount = state.data.find((item) => +item.id === +action.payload);
      if (getAmount.amount > 1) {
        getAmount.amount--;
      } else {
        state.data = state.data.filter((item) => +item.id !== +action.payload);
      }
      localStorage.setItem("listCart", JSON.stringify(state.data));
    },
    clearCart: (state, action) => {
      state.data = [];
      localStorage.setItem("listCart", JSON.stringify(state.data));
    },
  },
});
export const {
  increaseProductAmount,
  decreaseProductAmount,
  addProductToCart,
  removeProductFromCart,
  clearCart,
} = sliceCart.actions;
export default sliceCart.reducer;
