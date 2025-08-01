import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Startups from "./pages/Startups";
import Events from "./pages/Events";
import Mentorship from "./pages/Mentorship";
import Apply from "./pages/Apply";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
