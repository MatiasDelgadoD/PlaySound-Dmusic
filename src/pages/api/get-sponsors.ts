import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sponsorDirectory = path.join(process.cwd(), "public/patrocinadores");

    // Check if directory exists
    if (!fs.existsSync(sponsorDirectory)) {
      return res.status(404).json({ error: "Sponsor directory not found" });
    }

    const fileNames = fs.readdirSync(sponsorDirectory);

    const sponsors = fileNames.map((fileName) => {
      return {
        id: fileName,
        image: `/patrocinadores/${fileName}`, // ✅
        name: fileName.replace(/\.[^/.]+$/, ""),
      };
    });

    return res.status(200).json(sponsors);
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
