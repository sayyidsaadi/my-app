import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../utility/baseUrl";

// Header Banner Create
export const getAllBanner = createAsyncThunk(
  "banner/getAllBanner",
  async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/banner`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// header Appoinment Info Get
export const getAllheaderInfo = createAsyncThunk(
  "header/getAllheaderInfo",
  async () => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}/header`,

        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
