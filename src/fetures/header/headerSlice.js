import { createSlice } from "@reduxjs/toolkit";
import { getAllLogo, getAllheaderInfo } from "./headerApiSlice";
export const headerSlice = createSlice({
  name: "header",
  initialState: {
    headers: [],
    logos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLogo.fulfilled, (state, action) => {
        state.logos = action.payload.logos;
      })
      .addCase(getAllheaderInfo.fulfilled, (state, action) => {
        state.headers = action.payload.headers;
      });
  },
});

// Get Header Info
export const getHeaderInfo = (state) => state.header;

// Export Header Slice
export default headerSlice.reducer;
