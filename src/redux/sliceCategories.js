import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { data } from "../data";
export const fetchCategories = createAsyncThunk(
  "sliceCategories/fetchCategories",
  async () => {
    let res = await fetch("https://api.escuelajs.co/api/v1/categories");
    let data = await res.json();
    return data;
  }
);
const sliceCategories = createSlice({
  initialState: { dataCategories: [], lodding: false, error: false },
  name: "sliceCategories",
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.lodding = true;
      state.error = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.dataCategories = action.payload;
      state.lodding = false;
      state.error = false;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.lodding = false;
      state.error = true;
    });
  },
});

export default sliceCategories.reducer;
