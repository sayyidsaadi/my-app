import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../utility/baseUrl";

// Header Logo Create
export const getAllLogo = createAsyncThunk("header/getAllLogo", async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/logo`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

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
