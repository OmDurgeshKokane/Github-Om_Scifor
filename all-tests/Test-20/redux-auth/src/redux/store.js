import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import the auth reducer

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth slice to store
  },
});
