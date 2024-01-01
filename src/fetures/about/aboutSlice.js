import { createSlice } from "@reduxjs/toolkit";
import { contactUs, getAllAbout } from "./aboutApiSlice";

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    abouts: [],
    message: null,
    loading: false,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAbout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllAbout.fulfilled, (state, action) => {
        state.abouts = action.payload.abouts;
        state.loading = false;
      })
      .addCase(contactUs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(contactUs.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(contactUs.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      });
  },
});

// Export Actions
export const { setMessageEmpty } = aboutSlice.actions;
// Export Selector
export const getaboutInfo = (state) => state.about;

// Export aboutSlice
export default aboutSlice.reducer;
