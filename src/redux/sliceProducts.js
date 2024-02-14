import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { data } from "../data";
export const fetchProducts = createAsyncThunk(
  "sliceProducts/fetchProducts",
  async () => {
    let res = await fetch("https://api.escuelajs.co/api/v1/products");
    let data = await res.json();
    return data;
  }
);
const sliceProducts = createSlice({
  initialState: { data: [], lodding: false, error: false },
  name: "sliceFetchSlice",
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.lodding = true;
      state.error = false;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.lodding = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = true;
      state.lodding = false;
    });
  },
});

export default sliceProducts.reducer;
