'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
 
interface Sponsor {
  id: string;
  image: string;
  name: string;
}

const SponsorsCarousel = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const res = await fetch('/api/get-sponsors');
        const data = await res.json();
        setSponsors([...data, ...data]); // Duplicamos los sponsors para un efecto continuo
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };
    fetchSponsors();
  }, []);
  if (sponsors.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '80%',
        padding: '13px 0',
        mt:3,
        backgroundColor:' rgb(255, 255, 255, 0.9)',
        boxShadow: "0px 10px 20px rgba(0, 0, 0.7)",

      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {sponsors.map((sponsor, index) => (
          <SwiperSlide key={`${sponsor.id}-${index}`}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px',
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(1%)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={150}
                height={80}
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SponsorsCarousel;
