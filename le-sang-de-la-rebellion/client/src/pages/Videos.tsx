import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { Lock, ExternalLink, Play } from "lucide-react";

const videos = [
  "https://jumpshare.com/share/ebRq9gsVGu4lGuTUgXRa",
  "https://jumpshare.com/share/Jnr1aCIAKoY4dPuCh8ho",
  "https://jumpshare.com/share/v1wlKzehNZ8aH6UWL8Yi",
  "https://jumpshare.com/share/PT8sRzheOLATVDV99AmM",
  "https://jumpshare.com/share/r13wCQFwktv2AptXK3Bj",
  "https://jumpshare.com/share/7Ceu3KaxxvMi7lcALwCu",
  "https://jumpshare.com/share/t8Jv0FI2XSfyYeZ3B8nG",
  "https://jumpshare.com/share/ZA20QEiojog83xJaozeE",
  "https://jumpshare.com/share/bADhUZhtLwox3P7boE7y",
  "https://jumpshare.com/share/6vW7dJulK5SxnKyrWL3e"
];

export default function Videos() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground flex-col gap-4">
        <Lock className="w-12 h-12 text-red-600" />
        <h2 className="font-display text-2xl uppercase tracking-widest">Contenu Verrouillé</h2>
        <p className="font-mono text-gray-500 text-sm">Connectez-vous pour accéder aux archives.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-800 pb-8">
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">ARCHIVES VIDÉOS</h1>
            <p className="font-mono text-gray-500 mt-2">Moments capturés. Preuves d'existence.</p>
          </div>
          <div className="font-mono text-xs text-red-600 border border-red-600/30 px-3 py-1 bg-red-600/5">
            RESTRICTED ACCESS
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((url, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-video bg-neutral-900 border border-white/5 hover:border-red-600/50 flex flex-col items-center justify-center overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 to-black opacity-50" />
              
              <div className="z-10 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Play className="w-5 h-5 ml-1 fill-current" />
                </div>
                <span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider">
                  Archive #{String(index + 1).padStart(3, '0')}
                </span>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
}
