import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = { isAuthenticated: false };

const loggedInSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = loggedInSlice.actions;
export default loggedInSlice.reducer;
