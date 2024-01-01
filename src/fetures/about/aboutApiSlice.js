import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../utility/baseUrl";

// Header About Create
export const getAllAbout = createAsyncThunk("about/getAllAbout", async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/about`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Header About Create
export const contactUs = createAsyncThunk("about/contactUs", async (data) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/auth/mail`, data, {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
