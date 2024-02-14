import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { data } from "../data";
export const fetchProductsByCat = createAsyncThunk(
  "sliceProductsByCat/fetchProductsByCat",
  async (path) => {
    let res = await fetch("https://api.escuelajs.co/api/v1/" + path);
    let data = await res.json();
    return data.slice(0, 20);
  }
);

const sliceProductsByCat = createSlice({
  initialState: {
    data: [],
    loadding: false,
    error: false,
    valInp: "",
  },
  name: "sliceProductsByCat",
  reducers: {
    getValInpTitle: (state, action) => {
      state.valInp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCat.pending, (state, action) => {
      state.loadding = true;
      state.error = false;
    });
    builder.addCase(fetchProductsByCat.fulfilled, (state, action) => {
      state.loadding = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductsByCat.rejected, (state, action) => {
      state.loadding = false;
      state.error = true;
    });
  },
});

export const { getValInpTitle } = sliceProductsByCat.actions;
export default sliceProductsByCat.reducer;
