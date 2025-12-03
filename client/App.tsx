import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexWelcomeCard from "./pages/IndexWelcomeCard";
import IndexSalesHealthCard from "./pages/IndexSalesHealthCard";
import IndexMetaYanbalCard from "./pages/IndexMetaYanbalCard";
import IndexSuenoPersonalCard from "./pages/IndexSuenoPersonalCard";
import IndexLeadershipDistCard from "./pages/IndexLeadershipDistCard";
import IndexCampaignCard from "./pages/IndexCampaignCard";
import NotFound from "./pages/NotFound";
import IndexTomaSection from "./pages/IndexTomaSection";
import IndexMiSeguimientoCard from "./pages/IndexMiSeguimientoCard";
import IndexCelebrarCard from "./pages/IndexCelebrarCard";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/s1" element={<IndexWelcomeCard />} />
          <Route path="/s2" element={<IndexSalesHealthCard />} />
          <Route path="/s3" element={<IndexMetaYanbalCard />} />
          <Route path="/s4" element={<IndexSuenoPersonalCard />} />
          
          <Route path="/d1" element={<IndexLeadershipDistCard />} />
          <Route path="/d2" element={<IndexCampaignCard />} />
          <Route path="/d3" element={<IndexTomaSection />} />
          <Route path="/d4" element={<IndexMiSeguimientoCard />} />
          <Route path="/d5" element={<IndexCelebrarCard />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
