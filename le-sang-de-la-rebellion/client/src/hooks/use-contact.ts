import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertContactMessage } from "@shared/schema";

export function useCreateContactMessage() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const validated = api.contact.create.input.parse(data);
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) throw new Error("Données invalides");
        throw new Error("Erreur lors de l'envoi");
      }
      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}
