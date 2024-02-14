import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { data } from "../data";
export const fetchSingleProduct = createAsyncThunk(
  "sliceSingleProduct/fetchSingleProduct",
  async (id) => {
    let res = (
      await axios.get("https://api.escuelajs.co/api/v1/products/" + id)
    ).data;
    return res;
  }
);
const sliceSingleProduct = createSlice({
  initialState: { data: {}, loadding: false, error: false },
  name: "sliceSingleProduct",
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state, action) => {
      state.loadding = true;
      state.error = false;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loadding = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loadding = false;
      state.error = true;
    });
  },
});
export default sliceSingleProduct.reducer;
