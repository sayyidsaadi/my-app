import { createSlice } from "@reduxjs/toolkit";
import { getAllFooter } from "./footerApiSlice";

const footerSlice = createSlice({
  name: "footer",
  initialState: {
    footers: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getAllFooter.fulfilled, (state, action) => {
      state.footers = action.payload.footers;
    });
  },
});

// Export Selector
export const getfooterInfo = (state) => state.footer;

// Export footertSlice
export default footerSlice.reducer;
