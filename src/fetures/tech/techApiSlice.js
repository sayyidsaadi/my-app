import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../utility/baseUrl";

// Header Technoloy Create
export const getAllTechnoloy = createAsyncThunk(
  "technoloy/getAllTechnoloy",
  async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/technology`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
