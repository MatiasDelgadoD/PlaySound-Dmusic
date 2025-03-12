'use client'    
import React from 'react';
import { Card, Box, Grid } from '@mui/material';
import Image from 'next/image';

interface Artist {
  id: string;
  image: string;
  name: string;
  album: string;
}


const CardArtist = () => {
  const [artists, setArtists] = React.useState<Artist[]>([]);

  React.useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch('/api/get-artist');
        const data = await res.json();
        console.log('Data received:', data);
        
        // Asegurarse de que data sea un array
        if (Array.isArray(data)) {
          setArtists(data);
        } else if (data && typeof data === 'object') {
          // Si data es un objeto, convertirlo en array
          setArtists([data]);
        } else {
          setArtists([]);
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching artists:', error);
        setArtists([]);
      }
    };
    fetchArtists();
  }, []);

  // Asegurarse de que artists sea un array antes de hacer map
  if (!Array.isArray(artists)) {
    return null;
  }

  return (
    <Grid 
      container 
      spacing={3} 
      sx={{ 
        margin: 0,
        width: '100%',
        padding: '24px'
      }}
    >
      {artists.map((artist) => ( 
        <Grid 
          item 
          key={artist.id}
          sx={{
            padding: '12px',
            marginLeft: 0
          }}
        >
          <Card
            sx={{
              height: 480,
              width: 400,
              justifyItems: 'center', 
              display: 'flex',
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden', // Cambiado a hidden para contener el overlay
              transition: 'all 0.5s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02) translateY(8px)',
                '& img': {
                  boxShadow: '0px 8px 16px rgba(180, 67, 67, 0.6)',
                },
                '& .overlay': {
                  opacity: 1,
                }
              },
            }}
          >
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              style={{
                boxShadow: '0px 4px 8px rgba(180, 67, 67, 0.4)',            
                objectFit: 'cover',
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '20px',
                opacity: 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            >
              <Box sx={{ 
                textAlign: 'center',
                transform: 'translateY(20px)',
                transition: 'transform 0.5s ease-in-out',
                '.overlay:hover &': {
                  transform: 'translateY(0)',
                }
              }}>
                <h3 style={{ fontSize: '1.2rem' }}>
                  {artist.name}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
                  {artist.album || 'Artista destacado'}
                </p>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
      
      {/* New "Know More Artists" Card */}
      <Grid item>
        <Card
          sx={{
            height: 500,
            width: 410,
            background: 'linear-gradient(135deg, #252525 0%, #b30000 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 1.8s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02) translateY(8px)',
              transition: 'all 1.5s ease-in-out',
              '& .knowMore': {
                opacity: 1,
                color: 'grey',
                transition: 'opacity 2.5s ease-in-out',
              }
            },
          }}
        >
          <Box
            className="knowMore"
            sx={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              opacity: 0.7,
              transition: 'opacity 0.3s ease-in-out',
            }}
          >
            Conocer más Artistas
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardArtist;