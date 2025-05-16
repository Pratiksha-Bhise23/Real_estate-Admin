// import api from "./api";

// export interface LoginCredentials {
//   email: string;
//   password: string;
// }

// export interface AuthResponse {
//   token: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//     role: string;
//   };
// }

// const authService = {
//   login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
//     const response = await api.post<AuthResponse>("/admin/login", credentials);

//     const { token, user } = response.data;

//     // ✅ Store in localStorage
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(user));

//     return response.data;
//   },

//   logout: async (): Promise<void> => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   },

//   getCurrentUser: (): any => {
//     const userString = localStorage.getItem("user");
//     if (userString) {
//       try {
//         return JSON.parse(userString);
//       } catch (error) {
//         console.error("Error parsing user from localStorage", error);
//         return null;
//       }
//     }
//     return null;
//   }
// };

// export default authService;



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
    try {
      const response = await api.post("/admin/login", credentials);
      console.log("Login API response:", response.data);
      
      // Extract token from response
      const token = response.data.token;
      
      // Since the backend doesn't return user details with the token,
      // we'll extract the email from credentials and create a basic user object
      const user = {
        id: "1", // Default ID since we don't get it from the API
        name: credentials.email.split('@')[0], // Use part before @ as name
        email: credentials.email,
        role: "admin" // Default role
      };
      
      return { token, user };
    } catch (error) {
      console.error("Login API error:", error);
      throw error;
    }
  },
  
  logout: async (): Promise<void> => {
    // For JWT, we just remove the token from storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
  
  getCurrentUser: (): any => {
    try {
      const userString = localStorage.getItem("user");
      if (userString) {
        return JSON.parse(userString);
      }
      return null;
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
      return null;
    }
  }
};

export default authService;