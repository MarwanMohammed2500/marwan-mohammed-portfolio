import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // CV Download endpoint
  app.get("/api/download-cv", (req, res) => {
    const cvPath = path.join(process.cwd(), "attached_assets", "Marwan Mohammed_1749794679584.pdf");
    
    // Check if file exists
    if (!fs.existsSync(cvPath)) {
      return res.status(404).json({ message: "CV file not found" });
    }

    // Set appropriate headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Marwan_Mohammed_CV.pdf"');
    
    // Stream the file
    const fileStream = fs.createReadStream(cvPath);
    fileStream.pipe(res);
    
    fileStream.on('error', (error) => {
      console.error('Error streaming CV file:', error);
      res.status(500).json({ message: "Error downloading CV" });
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
