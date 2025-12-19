import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const members = [
  { alias: "T-MAKO", phone: "50937546412" },
  { alias: "T-GA", phone: "50938328426" },
  { alias: "T-KANA", phone: "50948598263" },
  { alias: "T-MÒ", phone: "50933944830" },
  { alias: "Predson", phone: "50937144797" },
  { alias: "Deku", phone: "50955018466" },
  { alias: "Donby", phone: "50944150319" },
  { alias: "Mitsuki", phone: "50936846133" },
  { alias: "Bentley", phone: "50939460369" },
  { alias: "T-FENEX", phone: "50948364516" },
  { alias: "Mr_vens", phone: "50955956686" },
  { alias: "Schnay-G", phone: "50937132470" },
  { alias: "BONBOCLAP", phone: "50933573926" },
  { alias: "Yankee", phone: "50933781146" },
  { alias: "Wedensky", phone: "50936819045" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Crew() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <header className="mb-16 border-b border-gray-800 pb-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">LE CREW</h1>
          <p className="font-mono text-gray-500 max-w-xl">
            Les membres fondateurs et piliers du mouvement. Chaque nom compte. Chaque lien est sacré.
          </p>
        </header>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {members.map((member) => (
            <motion.div 
              key={member.alias}
              variants={item}
              className="group relative bg-card border border-white/5 hover:border-red-600/50 p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-white/10 group-hover:border-red-600/30 transition-colors">
                  <span className="font-display font-bold text-2xl text-white/50 group-hover:text-white transition-colors">
                    {member.alias.charAt(0)}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold tracking-wider text-white mb-1 group-hover:text-red-500 transition-colors">
                    {member.alias}
                  </h3>
                  <a 
                    href={`https://wa.me/${member.phone}?text=Coucou%20${member.alias}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-green-500 transition-colors uppercase tracking-wider"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
