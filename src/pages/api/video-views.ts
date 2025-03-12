import { NextApiRequest, NextApiResponse } from 'next';

let viewCount = 1000; // Valor inicial

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simular incremento de views
  viewCount += Math.floor(Math.random() * 5);
  
  res.status(200).json({ views: viewCount });
}