
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import LoginPage from "@/pages/auth/LoginPage";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserManagement from "./pages/users/UserManagement";
import AgentManagement from "./pages/agents/AgentManagement";
import CategoryManagement from "./pages/categories/CategoryManagement";
import CommissionPage from "./pages/commissions/CommissionPage";
import PropertiesPage from "./pages/properties/PropertiesPage";
import OffersPage from "./pages/offers/OffersPage";
import GradesPage from "./pages/grades/GradesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Wrap BrowserRouter around AuthProvider since we're using navigate in useAuth
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Public route */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Index />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/agents" element={<AgentManagement />} />
                <Route path="/categories" element={<CategoryManagement />} />
                <Route path="/commissions" element={<CommissionPage />} />
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/grades" element={<GradesPage />} />
              </Route>
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
