// // import api from "./api";

// // export interface LoginCredentials {
// //   email: string;
// //   password: string;
// // }

// // export interface AuthResponse {
// //   token: string;
// //   user: {
// //     id: string;
// //     name: string;
// //     email: string;
// //     role: string;
// //   };
// // }

// // const authService = {
// //   login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
// //     const response = await api.post<AuthResponse>("/admin/login", credentials);

// //     const { token, user } = response.data;

// //     // ✅ Store in localStorage
// //     localStorage.setItem("token", token);
// //     localStorage.setItem("user", JSON.stringify(user));

// //     return response.data;
// //   },

// //   logout: async (): Promise<void> => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //   },

// //   getCurrentUser: (): any => {
// //     const userString = localStorage.getItem("user");
// //     if (userString) {
// //       try {
// //         return JSON.parse(userString);
// //       } catch (error) {
// //         console.error("Error parsing user from localStorage", error);
// //         return null;
// //       }
// //     }
// //     return null;
// //   }
// // };

// // export default authService;



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
//     try {
//       const response = await api.post("/admin/login", credentials);
//       console.log("Login API response:", response.data);
      
//       // Extract token from response
//       const token = response.data.token;
      
//       // Since the backend doesn't return user details with the token,
//       // we'll extract the email from credentials and create a basic user object
//       const user = {
//         id: "1", // Default ID since we don't get it from the API
//         name: credentials.email.split('@')[0], // Use part before @ as name
//         email: credentials.email,
//         role: "admin" // Default role
//       };
      
//       return { token, user };
//     } catch (error) {
//       console.error("Login API error:", error);
//       throw error;
//     }
//   },
  
//   logout: async (): Promise<void> => {
//     // For JWT, we just remove the token from storage
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   },
  
//   getCurrentUser: (): any => {
//     try {
//       const userString = localStorage.getItem("user");
//       if (userString) {
//         return JSON.parse(userString);
//       }
//       return null;
//     } catch (error) {
//       console.error("Error parsing user from localStorage", error);
//       return null;
//     }
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
