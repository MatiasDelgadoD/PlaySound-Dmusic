import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sponsorDirectory = path.join(process.cwd(), 'public/patrocinadores');
  const fileNames = fs.readdirSync(sponsorDirectory);

  const sponsors = fileNames.map((fileName) => {
    return {
      id: fileName,
      image: `/patrocinadores/${fileName}`,
      name: fileName.replace(/\.[^/.]+$/, ''), 
    };
  });

  res.status(200).json(sponsors);
}
