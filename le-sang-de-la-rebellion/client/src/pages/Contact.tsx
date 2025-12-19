import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Redirect to NGL link
    window.location.href = "https://ngl.link/mitsuki14372";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl text-white">REDIRECTION...</h2>
          <p className="font-mono text-gray-500 text-sm">Vous allez être redirigé vers la plateforme de messages.</p>
        </motion.div>
      </div>
    </div>
  );
}
