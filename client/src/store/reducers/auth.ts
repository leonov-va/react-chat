import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/authService";

interface IInitialState {
  user: AuthResponse;
  isAuth: boolean;
}

const initialState: IInitialState = {
  user: null,
  isAuth: false,
};

export type AuthResponse = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar?: any;
  createdAt: Date;
  updatedAt: Date;
  token: string;
};

export type LoginRequest = { email: string; password: string };

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

export const login = createAsyncThunk<AuthResponse, LoginRequest>(
  "auth/login",
  async (credentials) => await AuthService.login(credentials)
);

export const register = createAsyncThunk<AuthResponse, RegisterRequest>(
  "auth/register",
  async (credentials) => await AuthService.register(credentials)
);
