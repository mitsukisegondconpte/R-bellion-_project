import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/use-auth";
import { Lock, Image as ImageIcon } from "lucide-react";

export default function Gallery() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground flex-col gap-4">
        <Lock className="w-12 h-12 text-red-600" />
        <h2 className="font-display text-2xl uppercase tracking-widest">Galerie Privée</h2>
        <p className="font-mono text-gray-500 text-sm">Accès réservé aux membres.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">GALERIE</h1>
          <p className="font-mono text-gray-500 mt-2">Souvenirs figés dans le temps.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Placeholder grid since no image URLs were provided for gallery specifically */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className={`bg-neutral-900 border border-white/5 flex items-center justify-center relative overflow-hidden group ${
                i === 0 || i === 5 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
              <ImageIcon className="text-gray-700 w-8 h-8 group-hover:text-gray-500 transition-colors" />
              <span className="absolute bottom-4 left-4 font-mono text-xs text-gray-600 group-hover:text-white transition-colors">
                IMG_{1000 + i}.RAW
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
