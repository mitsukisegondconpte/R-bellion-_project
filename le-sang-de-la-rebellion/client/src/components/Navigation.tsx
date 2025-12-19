import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { Menu, X, LogOut, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const links = [
    { href: "/home", label: "ACCUEIL" },
    { href: "/crew", label: "LE CREW" },
    { href: "/history", label: "HISTOIRE" },
    { href: "/videos", label: "VIDÉOS", protected: true },
    { href: "/gallery", label: "GALERIE", protected: true },
    { href: "/contact", label: "CONTACT" },
  ];

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/home" className="text-2xl font-display font-bold text-white tracking-widest hover:text-gray-300 transition-colors">
            LS<span className="text-red-600">DL</span>R
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto p-2 text-white hover:text-red-500 transition-colors"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl md:text-6xl font-display font-bold tracking-wider hover:text-red-600 transition-all duration-300 block ${
                        location === link.href ? "text-red-600" : "text-white"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-3">
                        {link.label}
                        {link.protected && !isAuthenticated && (
                          <Lock size={20} className="text-gray-500" />
                        )}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
              
              {isAuthenticated && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={handleLogout}
                  className="mt-8 flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors font-mono uppercase tracking-widest text-sm"
                >
                  <LogOut size={16} /> Déconnexion
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
