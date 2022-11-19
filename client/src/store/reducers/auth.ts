import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/authService";

interface IInitialState {
  user: IUser;
  token: string;
  isAuth: boolean;
}

const initialState: IInitialState = {
  user: JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("token"),
  isAuth: !!localStorage.getItem("user"),
};

export type IUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar?: any;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthResponse = {
  user: IUser;
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
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuth = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuth = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.user = action.payload;
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

export const logout = createAsyncThunk("auth/logout", async () =>
  AuthService.logout()
);

export const updateProfile = createAsyncThunk<any, any>(
  "auth/updateProfile",
  async (credentials) => await AuthService.updateProfile(credentials)
);
