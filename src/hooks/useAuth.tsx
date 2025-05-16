
// import React, { createContext, useContext, useState, useEffect } from "react";
// import authService, { LoginCredentials, AuthResponse } from "@/services/authService";
// import { toast } from "@/components/ui/use-toast";

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
  
//   useEffect(() => {
//     // Check if user is logged in from local storage
//     try {
//       const currentUser = authService.getCurrentUser();
//       if (currentUser) {
//         setUser(currentUser);
//       }
//     } catch (error) {
//       console.error("Error checking authentication state:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   const login = async (email: string, password: string): Promise<void> => {
//     setIsLoading(true);
    
//     try {
//       const response: AuthResponse = await authService.login({ email, password });
//       const { token } = response;
      
//       // Save token and user to local storage
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
      
//       setUser(user);
//       toast({
//         title: "Login Successful",
//         description: `Welcome back, ${user?.name || user?.email || 'Admin'}`,
//       });
//     } catch (error: any) {
//       console.error("Login error:", error);
//       const errorMessage = error.response?.data?.message || "Invalid credentials. Please try again.";
//       toast({
//         title: "Login Failed",
//         description: errorMessage,
//         variant: "destructive",
//       });
//       throw new Error(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async (): Promise<void> => {
//     try {
//       await authService.logout();
//       setUser(null);
//       toast({
//         title: "Logged Out",
//         description: "You have been successfully logged out.",
//       });
//     } catch (error) {
//       console.error("Logout error:", error);
//       toast({
//         title: "Logout Error",
//         description: "There was an issue logging out. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         isLoading,
//         login,
//         logout
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



import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import authService, { LoginCredentials, AuthResponse } from "@/services/authService";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

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
  checkAuthStatus: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  const checkAuthStatus = useCallback(() => {
    try {
      const token = localStorage.getItem("token");
      const userStr = localStorage.getItem("user");
      
      if (token && userStr) {
        const user = JSON.parse(userStr);
        setUser(user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking authentication state:", error);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

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
        description: `Welcome back, ${user?.name || user?.email || 'Admin'}`,
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
      navigate("/login", { replace: true });
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
        logout,
        checkAuthStatus
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
