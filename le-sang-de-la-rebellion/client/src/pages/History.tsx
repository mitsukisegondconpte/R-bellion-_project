import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function History() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <header className="border-l-4 border-red-600 pl-6 md:pl-10 py-2">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-2">
              L'Histoire
            </h1>
            <p className="font-mono text-sm text-red-600 tracking-[0.2em] uppercase">
              Depuis le 12 Septembre 2024
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none font-sans font-light leading-relaxed text-gray-300">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
              Le Sang de la Rébellion est né le 12/09/2024, non pas comme un simple groupe, mais comme une réponse. 
              Une réponse au silence, à l'indifférence, et à l'acceptation aveugle des règles établies par ceux qui ne nous ressemblent pas.
            </p>
            
            <p>
              Nous sommes une fraternité forgée dans les rues et cimentée par une loyauté inébranlable. 
              Ici, les titres importent peu ; ce sont les actions qui définissent l'homme. 
              Notre philosophie tient en une phrase : 
              <span className="text-white font-medium italic block my-4 pl-4 border-l border-gray-700">
                "Pa pè di non lè sa nesesè."
              </span>
            </p>

            <p>
              Chaque membre du crew porte en lui cette étincelle de refus, ce désir de tracer sa propre route. 
              Nous ne sommes pas des délinquants, nous sommes des résistants du quotidien. 
              Nous protégeons les nôtres, nous honorons nos paroles, et nous ne courbons l'échine devant personne.
            </p>

            <div className="my-12 p-8 bg-white/5 border border-white/10 rounded-sm">
              <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-wider">Nos Valeurs</h3>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  LOYAUTÉ : On ne trahit jamais la famille.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  COURAGE : Dire la vérité, même quand ça tremble.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  RESPECT : Il se gagne, il ne se demande pas.
                </li>
              </ul>
            </div>

            <p>
              L'histoire ne fait que commencer. Chaque jour est une nouvelle page que nous écrivons ensemble, 
              avec l'encre de notre détermination et, s'il le faut, le sang de notre engagement.
            </p>
          </article>
        </motion.div>
      </main>
    </div>
  );
}
