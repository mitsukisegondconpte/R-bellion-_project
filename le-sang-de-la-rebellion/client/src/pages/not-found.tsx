import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6 max-w-md px-6">
        <AlertTriangle className="h-16 w-16 text-red-600 mx-auto" />
        <h1 className="font-display text-4xl font-bold tracking-widest">404</h1>
        <p className="font-mono text-gray-500">
          Vous vous êtes perdu dans les ruelles sombres. Cette page n'existe pas.
        </p>
        <Link href="/" className="inline-block mt-8 text-sm font-mono uppercase tracking-widest hover:text-red-600 underline decoration-1 underline-offset-4">
          Retour en lieu sûr
        </Link>
      </div>
    </div>
  );
}
