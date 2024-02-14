import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchSearch = createAsyncThunk(
  "sliceSearch/fetchSearch",
  async (id) => {
    let res = (await axios.get("https://api.escuelajs.co/api/v1/products"))
      .data;
    return res;
  }
);
const sliceSearch = createSlice({
  initialState: { data: [], valInp: "", loadding: false, error: false },
  name: "sliceSearch",
  reducers: {
    updateValIno: (state, action) => {
      state.valInp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.loadding = true;
      state.error = false;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.loadding = false;
      state.error = false;
      state.data = action.payload.filter((item) =>
        item.title.toLowerCase().includes(state.valInp.toLowerCase())
      );
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.loadding = false;
      state.error = true;
    });
  },
});
export const { updateValIno } = sliceSearch.actions;
export default sliceSearch.reducer;
