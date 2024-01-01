import { createSlice } from "@reduxjs/toolkit";
import { getAllService } from "./serviceApiSlice";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllService.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllService.fulfilled, (state, action) => {
        state.services = action.payload.services;
        state.loading = false;
      });
  },
});

// Export Selector
export const getserviceInfo = (state) => state.service;

// Export servicetSlice
export default serviceSlice.reducer;
