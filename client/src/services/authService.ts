import {
  LoginRequest,
  AuthResponse,
  RegisterRequest,
} from "../store/reducers/auth";
import API from "./api";

const AuthService = {
  async login(credentials: LoginRequest) {
    const response = await API.post<AuthResponse>("/login", credentials);
    API.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
    return response.data;
  },
  async register(credentials: RegisterRequest) {
    const response = await API.post<AuthResponse>("/register", credentials);
    API.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
    return response.data;
  },
  logout() {},
};

export default AuthService;
