// Redux slice
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = [];
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
