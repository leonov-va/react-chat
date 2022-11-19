import {
  LoginRequest,
  AuthResponse,
  RegisterRequest,
} from "../store/reducers/auth";
import API from "./api";

const AuthService = {
  async login(credentials: LoginRequest) {
    const response = await API.post<AuthResponse>("/login", credentials);
    setHeadersAndStorage(response.data);
    return response.data;
  },
  async register(credentials: RegisterRequest) {
    const response = await API.post<AuthResponse>("/register", credentials);
    setHeadersAndStorage(response.data);
    return response.data;
  },
  async updateProfile(credentials: any) {
    const config = {
      headers: { "Content-Type": "application/x-www-form-urllencoded" },
    };
    const response = await API.post<AuthResponse>(
      "/users/update",
      credentials,
      config
    );
    localStorage.setItem("user", JSON.stringify({...response.data}));
    return response.data;
  },
  logout() {
    API.defaults.headers["Authorization"] = "";
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
};

const setHeadersAndStorage = ({ user, token }: any) => {
  API.defaults.headers["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export default AuthService;
