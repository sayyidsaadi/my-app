import { createSlice } from "@reduxjs/toolkit";
import { getAllDoctor } from "./doctorApiSlice";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllDoctor.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllDoctor.fulfilled, (state, action) => {
        state.doctors = action.payload.doctors;
        state.loading = false;
      });
  },
});

// Export Selector
export const getdoctorInfo = (state) => state.doctor;

// Export doctortSlice
export default doctorSlice.reducer;
