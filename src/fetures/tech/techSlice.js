import { createSlice } from "@reduxjs/toolkit";
import { getAllTechnoloy } from "./techApiSlice";

const technologySlice = createSlice({
  name: "technology",
  initialState: {
    technologies: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getAllTechnoloy.fulfilled, (state, action) => {
      state.technologies = action.payload.technologies;
    });
  },
});

// Export Selector
export const gettechnologyInfo = (state) => state.technology;

// Export technologytSlice
export default technologySlice.reducer;
