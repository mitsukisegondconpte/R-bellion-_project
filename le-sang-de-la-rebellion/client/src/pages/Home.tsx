import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none">
          {/* dark urban texture */}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center space-y-8 max-w-4xl"
        >
          <div className="space-y-2">
            <h2 className="font-mono text-sm md:text-base text-red-600 tracking-[0.3em] uppercase">
              Fondé le 12/09/2024
            </h2>
            <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 glitch-text" data-text="LE SANG DE LA RÉBELLION">
              LE SANG DE<br/>LA RÉBELLION
            </h1>
          </div>

          <p className="font-mono text-sm md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed border-l-2 border-red-600 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            "Une famille unie par la loyauté et la vérité. Nous ne suivons pas les règles, nous les écrivons."
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/crew" className="group relative px-8 py-4 bg-white text-black font-display font-bold tracking-wider uppercase overflow-hidden hover:bg-gray-200 transition-colors">
              <span className="relative z-10 flex items-center gap-2">
                Découvrir le Crew <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link href="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-display tracking-wider uppercase hover:bg-white/5 transition-colors">
              Nous rejoindre
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 p-6 opacity-30 pointer-events-none">
           <p className="font-mono text-xs">EST. 2024 • PORT-AU-PRINCE</p>
        </div>
      </main>
    </div>
  );
}
