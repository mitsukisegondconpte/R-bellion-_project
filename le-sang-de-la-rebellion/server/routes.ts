import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

// Extend session type
declare module "express-session" {
  interface SessionData {
    authenticated: boolean;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Auth Middleware for protected routes
  const requireAuth = (req: any, res: any, next: any) => {
    if (req.session.authenticated) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };

  app.post(api.auth.login.path, (req, res) => {
    try {
      const { password } = api.auth.login.input.parse(req.body);
      
      if (password === "S2rebelle") {
        req.session.authenticated = true;
        res.json({ success: true });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    } catch (err) {
      res.status(400).json({ message: "Invalid request" });
    }
  });

  app.get(api.auth.check.path, (req, res) => {
    res.json({ authenticated: !!req.session.authenticated });
  });

  app.post(api.auth.logout.path, (req, res) => {
    req.session.destroy(() => {
      res.json({});
    });
  });

  app.post(api.contact.create.path, requireAuth, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
        });
      }
      throw err;
    }
  });

  return httpServer;
}
