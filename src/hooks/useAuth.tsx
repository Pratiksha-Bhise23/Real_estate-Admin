// // import React, { createContext, useContext, useState, useEffect } from "react";

// // interface User {
// //   id: string;
// //   email: string;
// //   name: string;
// // }

// // interface AuthContextType {
// //   user: User | null;
// //   isAuthenticated: boolean;
// //   isLoading: boolean;
// //   login: (email: string, password: string) => Promise<void>;
// //   logout: () => void;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// //   const [user, setUser] = useState<User | null>(null);
// //   const [isLoading, setIsLoading] = useState(true);
  
// //   useEffect(() => {
// //     // Check if user is logged in (from local storage)
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       try {
// //         setUser(JSON.parse(storedUser));
// //       } catch (error) {
// //         console.error("Failed to parse stored user:", error);
// //         localStorage.removeItem("user");
// //       }
// //     }
// //     setIsLoading(false);
// //   }, []);

// //   const login = async (email: string, password: string): Promise<void> => {
// //     // In a real app, you'd validate credentials against your backend
// //     // For demo purposes, we'll accept any email with a password length >= 6
    
// //     if (password.length < 6) {
// //       throw new Error("Invalid credentials");
// //     }

// //     // Mock API call delay
// //     await new Promise(resolve => setTimeout(resolve, 800));
    
// //     // Mock successful login
// //     const userData: User = {
// //       id: "user-1",
// //       email,
// //       name: email.split('@')[0] // Extract name from email for demo
// //     };
    
// //     // Save user to local storage
// //     localStorage.setItem("user", JSON.stringify(userData));
// //     setUser(userData);
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         user,
// //         isAuthenticated: !!user,
// //         isLoading,
// //         login,
// //         logout
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (context === undefined) {
// //     throw new Error("useAuth must be used within an AuthProvider");
// //   }
// //   return context;
// // };

// import React, { createContext, useContext, useState, useEffect } from "react";
// import authService, { AuthResponse } from "@/services/authService";

// interface User {
//   id: string;
//   email: string;
//   name: string;
//   role: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is logged in using authService
//     const currentUser = authService.getCurrentUser();
//     if (currentUser) {
//       setUser(currentUser);
//     }
//     setIsLoading(false);
//   }, []);

//   const login = async (email: string, password: string): Promise<void> => {
//     try {
//       const response: AuthResponse = await authService.login({ email, password });
//       setUser(response.user);
//       localStorage.setItem("token", response.token);
//       localStorage.setItem("user", JSON.stringify(response.user));
//     } catch (error) {
//       console.error("Login failed:", error);
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await authService.logout();
//       setUser(null);
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         isLoading,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };



import React, { createContext, useContext, useState, useEffect } from "react";
import authService, { LoginCredentials, AuthResponse } from "@/services/authService";
import { toast } from "@/components/ui/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in from local storage
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    
    try {
      const response: AuthResponse = await authService.login({ email, password });
      const { token, user } = response;
      
      // Save token and user to local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      
      setUser(user);
      toast({
        title: "Login Successful",
        description: `Welcome back, sa`,
      });
    } catch (error: any) {
      console.error("Login error:", error);
      const errorMessage = error.response?.data?.message || "Invalid credentials. Please try again.";
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await authService.logout();
      setUser(null);
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Logout Error",
        description: "There was an issue logging out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};