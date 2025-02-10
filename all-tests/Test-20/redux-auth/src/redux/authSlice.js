import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // Initially, user is not authenticated
  user: null, // No user data initially
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Store user data
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null; // Remove user data
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
