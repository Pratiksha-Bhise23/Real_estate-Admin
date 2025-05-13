
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Index from "../src/pages/Index";
import NotFound from "../src/pages/NotFound";
import UserManagement from "../src/pages/users/UserManagement";
import AgentManagement from "../src/pages/agents/AgentManagement";
import CategoryManagement from "../src/pages/categories/CategoryManagement";
import CommissionPage from "../src/pages/commissions/CommissionPage";
import PropertiesPage from "../src/pages/properties/PropertiesPage";
import OffersPage from "../src/pages/offers/OffersPage";
import GradesPage from "../src/pages/grades/GradesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
