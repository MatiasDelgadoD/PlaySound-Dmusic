import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const artistCustomNames: { [key: string]: { name: string; album: string } } = {
  '1000': { name: 'Alejandro Fernández', album: 'A Mi Manera' },
  '2000': { name: 'Ánimas', album: 'Si tú no estas a mi lado' },
  '3000': { name: 'Elena Rose', album: 'Un Beso Menos' },
  '4000': { name: 'Jose Alberto Jimenes', album: 'Chingese' },
  '5000': { name: 'Los pecki´Z', album: 'Nuestro Amor sin Fin' },
  '6000': { name: 'Maria Jose', album: 'Arrepentido' },
  '7000': { name: 'La Patrona', album: '' },
  '8000': { name: 'Y N G ', album: 'Dramatico' },
};


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const artistDirectory = path.join(process.cwd(), 'public', 'artist');
    
    // Verificar si el directorio existe
    if (!fs.existsSync(artistDirectory)) {
      console.error('Directory not found:', artistDirectory);
      return res.status(404).json({ error: 'Artist directory not found' });
    }

    const fileNames = fs.readdirSync(artistDirectory);

    // Verificar si hay archivos
    if (fileNames.length === 0) {
      console.error('No files found in directory');
      return res.status(404).json({ error: 'No artist files found' });
    }

    const artists = fileNames.map((fileName) => {
      const fileKey = fileName.replace(/\.[^/.]+$/, '');
      const artistInfo = artistCustomNames[fileKey] || { 
        name: fileName.replace(/\.[^/.]+$/, ''),
        album: 'Nuevo Álbum' 
      };

      // Asegurar que la ruta de la imagen sea absoluta
      const imagePath = `/artist/${fileName}`;

      return {
        id: fileName,
        image: imagePath,
        name: artistInfo.name,
        album: artistInfo.album,
      };
    });

    // Log para debugging
    console.log('Artists found:', artists.length);
    console.log('First artist:', artists[0]);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json(artists);

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Error processing artists', details: error });
  }
}

