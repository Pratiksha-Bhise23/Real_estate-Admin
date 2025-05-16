
// // import React from "react";
// // import { Navigate, Outlet } from "react-router-dom";
// // import { useAuth } from "@/hooks/useAuth";

// // const ProtectedRoute: React.FC = () => {
// //   const { isAuthenticated, isLoading } = useAuth();
  
// //   // If authentication is still loading, show nothing (or could add a loading spinner)
// //   if (isLoading) {
// //     return <div className="h-screen flex items-center justify-center">Loading...</div>;
// //   }
  
// //   // If not authenticated, redirect to login page
// //   if (!isAuthenticated) {
// //     return <Navigate to="/login" replace />;
// //   }
  
// //   // If authenticated, render the protected route
// //   return <Outlet />;
// // };

// // export default ProtectedRoute;



// import React from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";

// const ProtectedRoute: React.FC = () => {
//   const { isAuthenticated, isLoading } = useAuth();
//   const location = useLocation();
  
//   // If authentication is still loading, show loading indicator
//   if (isLoading) {
//     return <div className="h-screen flex items-center justify-center">Loading...</div>;
//   }
  
//   // If not authenticated, redirect to login page
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
  
//   // If authenticated and at root path, redirect to dashboard
//   if (location.pathname === '/') {
//     return <Navigate to="/dashboard" replace />;
//   }
  
//   // If authenticated, render the protected route
//   return <Outlet />;
// };

// export default ProtectedRoute;

//16/05/25
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";

// const ProtectedRoute: React.FC = () => {
//   const { isAuthenticated, isLoading } = useAuth();
  
//   // If authentication is still loading, show loading indicator
//   if (isLoading) {
//     return <div className="h-screen flex items-center justify-center">Loading...</div>;
//   }
  
//   // If not authenticated, redirect to login page
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
  
//   // If authenticated, render the protected route
//   return <Outlet />;
// };

// export default ProtectedRoute;



import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isLoading, checkAuthStatus } = useAuth();
  const navigate = useNavigate();
  
  // Check auth status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  // If authentication is still loading, show loading indicator
  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated, render the protected route
  return <Outlet />;
};

export default ProtectedRoute;
