
import api from "./api";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post("/admin/login", credentials);
    return response.data;
  },
  
  logout: async (): Promise<void> => {
    // For JWT, we just remove the token from storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
  
  getCurrentUser: (): any => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        return JSON.parse(userString);
      } catch (error) {
        console.error("Error parsing user from localStorage", error);
        return null;
      }
    }
    return null;
  }
};

export default authService;
