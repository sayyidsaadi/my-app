import { createSlice } from "@reduxjs/toolkit";
import { getAllBlog } from "./blogApiSlice";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllBlog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.blogs = action.payload.blogs;
        state.loading = false;
      });
  },
});

// Export Selector
export const getblogInfo = (state) => state.blog;

// Export blogtSlice
export default blogSlice.reducer;
