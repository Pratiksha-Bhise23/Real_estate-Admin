
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public route */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/" element={<Index />} />
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
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
