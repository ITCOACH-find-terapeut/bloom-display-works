import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ydelser from "./pages/Ydelser";
import Serviceaftaler from "./pages/Serviceaftaler";
import OmOs from "./pages/OmOs";
import NotFound from "./pages/NotFound";
import Beplantning from "./pages/ydelser/Beplantning";
import BeskaringAfTraerOgBuske from "./pages/ydelser/BeskaringAfTraerOgBuske";
import Brolaegning from "./pages/ydelser/Brolaegning";
import Havearbejde from "./pages/ydelser/Havearbejde";
import Stottemur from "./pages/ydelser/Stottemur";
import Traefaeldning from "./pages/ydelser/Traefaeldning";
import VedligeholdelseAfGronneOmrader from "./pages/ydelser/VedligeholdelseAfGronneOmrader";
import AnlaegningAGraesplaene from "./pages/ydelser/AnlaegningAGraesplaene";
import OpsaetningHegn from "./pages/ydelser/OpsaetningHegn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ydelser" element={<Ydelser />} />
          <Route path="/ydelser/beplantning" element={<Beplantning />} />
          <Route path="/ydelser/beskaering-af-traer-og-buske" element={<BeskaringAfTraerOgBuske />} />
          <Route path="/ydelser/brolaegning" element={<Brolaegning />} />
          <Route path="/ydelser/havearbejde" element={<Havearbejde />} />
          <Route path="/ydelser/stottemur" element={<Stottemur />} />
          <Route path="/ydelser/traefaeldning" element={<Traefaeldning />} />
          <Route path="/ydelser/vedligeholdelse-af-gronne-omrader" element={<VedligeholdelseAfGronneOmrader />} />
          <Route path="/ydelser/anlaegning-af-graesplaene" element={<AnlaegningAGraesplaene />} />
          <Route path="/ydelser/opsaetning-hegn" element={<OpsaetningHegn />} />
          <Route path="/serviceaftaler" element={<Serviceaftaler />} />
          <Route path="/om-os" element={<OmOs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
