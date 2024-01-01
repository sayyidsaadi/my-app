import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../utility/baseUrl";

// Header Service Create
export const getAllService = createAsyncThunk(
  "service/getAllService",
  async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/service`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
