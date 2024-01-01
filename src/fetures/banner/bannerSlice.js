import { createSlice } from "@reduxjs/toolkit";
import { getAllBanner } from "./bannnerApiSlice";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    banners: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllBanner.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllBanner.fulfilled, (state, action) => {
        state.banners = action.payload.banners;
        state.loading = false;
      });
  },
});

// Export Actions
export const { setMessageEmpty } = bannerSlice.actions;
// Export Selector
export const getbannerInfo = (state) => state.banner;

// Export bannerSlice
export default bannerSlice.reducer;
