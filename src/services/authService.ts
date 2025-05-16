
// import api from "./api";

// export interface LoginCredentials {
//   email: string;
//   password: string;
// }

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// export interface AuthResponse {
//   token: string;
//   user: User;
//   expiresIn: string;
// }

// const authService = {
//   login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
//     try {
//       const response = await api.post("/admin/login", credentials);
      
//       // Construct user object from token payload
//       // In a real app, the server would return user details
//       // Here we're creating a mock user since your API only returns token
//       // const user = {
//       //   id: "1", // This would come from the token payload in a real scenario
//       //   name: "Admin User",
//       //   email: credentials.email,
//       //   role: "admin",
//       // };
      
//       return {
//         token: response.data.token,
//         user: response.data.user,
//         expiresIn: response.data.expiresIn
//       };
//     } catch (error) {
//       throw error;
//     }
//   },

//   logout: async (): Promise<void> => {
//     // Clear local storage
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   },

//   getCurrentUser: (): User | null => {
//     const userStr = localStorage.getItem("user");
//     if (userStr) {
//       return JSON.parse(userStr);
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

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  expiresIn: string;
}

const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await api.post("/admin/login", credentials);
      
      // Construct user object from token payload
      // In a real app, the server would return user details
      // Here we're creating a mock user since your API only returns token
      // const user = {
      //   id: "1", // This would come from the token payload in a real scenario
      //   name: "Admin User",
      //   email: credentials.email,
      //   role: "admin",
      // };
      
      return {
        token: response.data.token,
        user: response.data.user,
        expiresIn: response.data.expiresIn
      };
    } catch (error) {
      throw error;
    }
  },

  logout: async (): Promise<void> => {
    // Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }
};

export default authService;
