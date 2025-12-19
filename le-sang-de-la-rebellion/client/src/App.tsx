import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";

// Pages
import LockScreen from "@/components/LockScreen";
import Home from "@/pages/Home";
import Crew from "@/pages/Crew";
import History from "@/pages/History";
import Videos from "@/pages/Videos";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function PrivateRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/");
    }
  }, [isLoading, isAuthenticated, setLocation]);

  if (isLoading) return null; // Or a loading spinner

  return isAuthenticated ? <Component /> : null;
}

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={LockScreen} />
      
      {/* Semi-Protected Routes (accessible via menu but need auth for full features usually) 
          However, based on flows, Lock Screen redirects to Home. 
          Assuming Home/Crew/History/Contact are public ONCE unlocked, but videos/gallery are stricter.
          Actually, the prompt implies "Once unlocked... show nav". 
          But standard web routing lets you jump. We'll treat "/" as the gatekeeper.
      */}
      <Route path="/home" component={Home} />
      <Route path="/crew" component={Crew} />
      <Route path="/history" component={History} />
      <Route path="/contact" component={Contact} />

      {/* Strictly Protected Routes (API checks auth too) */}
      <Route path="/videos" component={Videos} />
      <Route path="/gallery" component={Gallery} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
