import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Lock, ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  password: z.string().min(1, "Mot de passe requis"),
});

export default function LockScreen() {
  const { login, isLoggingIn } = useAuth();
  const [, setLocation] = useLocation();
  const [error, setError] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    login(values.password, {
      onSuccess: () => {
        setLocation("/home");
      },
      onError: () => {
        setError(true);
        form.reset();
        setTimeout(() => setError(false), 500);
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black" />

      <div className="z-10 w-full max-w-md px-6 flex flex-col items-center text-center space-y-12">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-black rounded-full border border-gray-800 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden">
            {/* Using a fallback if image fails, but attempting to load provided URL */}
            <img 
              src="https://jumpshare.com/share/DNBn9Xvy4xVcqaxUCXS9" 
              alt="Logo" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 flex items-center justify-center bg-neutral-900">
               <span className="font-display font-bold text-3xl tracking-tighter">LSDLR</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-widest text-white glitch-text" data-text="ACCÈS RÉSERVÉ">
              ACCÈS RÉSERVÉ
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-red-600 tracking-wider">
              LE SANG DE LA RÉBELLION
            </h2>
          </div>

          <p className="font-mono text-xs md:text-sm text-gray-500 max-w-xs leading-relaxed">
            Seuls ceux qui savent entrent.<br/>
            Pa pè di non lè sa nesesè.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="border-t border-gray-800 pt-6 max-w-xs"
          >
            <p className="font-mono text-xs text-gray-600 mb-4 leading-relaxed">
              Si vous n'êtes pas dans la rébellion, contactez un membre pour avoir le mode passe.
            </p>
            <a
              href="https://wa.me/50936846133?text=Coucou%20Mitsuki%20donne%20le%20mode%20passe%20pour%20le%20sang%20de%20la%20rebellion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-600/20 border border-green-600/50 text-green-400 font-mono text-xs uppercase hover:bg-green-600/30 hover:border-green-600 transition-all duration-300"
            >
              Contacter via WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Login Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-full max-w-sm space-y-4 ${error ? "animate-shake" : ""}`}
        >
          <div className="relative group">
            <input
              type="password"
              placeholder="MOT DE PASSE"
              {...form.register("password")}
              className="w-full bg-transparent border-b-2 border-gray-800 py-3 px-4 text-center text-white font-mono placeholder:text-gray-700 focus:outline-none focus:border-red-600 focus:placeholder-transparent transition-all duration-300"
              autoFocus
            />
            <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-700 w-4 h-4 group-focus-within:text-red-600 transition-colors" />
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-display tracking-widest uppercase text-sm border border-transparent hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isLoggingIn ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Entrer <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          
          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 font-mono text-xs uppercase tracking-widest"
            >
              Accès refusé
            </motion.p>
          )}
        </motion.form>
      </div>

      <div className="absolute bottom-8 text-gray-800 font-mono text-[10px] uppercase tracking-[0.2em]">
        Système Sécurisé v2.4
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
}
