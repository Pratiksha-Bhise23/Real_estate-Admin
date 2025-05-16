
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
      console.log("Login attempt with:", { email, password });
      const response: AuthResponse = await authService.login({ email, password });
      console.log("Login response:", response);
      
      // Save token and user to local storage
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      
      setUser(response.user);
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

// import React, { createContext, useContext, useState, useEffect } from "react";
// import authService, { AuthResponse } from "@/services/authService"; // Fixed import
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
//     const currentUser = authService.getCurrentUser();
//     if (currentUser) {
//       setUser(currentUser);
//     }
//     setIsLoading(false);
//   }, []);

//   const login = async (email: string, password: string): Promise<void> => {
//     setIsLoading(true);
//     try {
//       console.log("Initiating login with:", { email });
//       const response: AuthResponse = await authService.login({ email, password });
//       console.log("Login successful, user:", response.user);

//       localStorage.setItem("token", response.token);
//       localStorage.setItem("user", JSON.stringify(response.user));
//       setUser(response.user);

//       toast({
//         title: "Login Successful",
//         description: `Welcome back, ${response.user.name || response.user.email}!`,
//       });
//     } catch (error: any) {
//       console.error("Login failed:", {
//         message: error.message,
//         details: error,
//       });
//       const errorMessage = error.message || "Invalid credentials. Please try again.";
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