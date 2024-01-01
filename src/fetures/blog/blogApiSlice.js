import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../utility/baseUrl";

// Header Service Create
export const getAllBlog = createAsyncThunk("blog/getAllBlog", async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/blog`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
