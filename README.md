### $${\color{red}Videos}$$ and $${\color{blue}Slider}$$
Remember that since it is a transmission channel, visual/audio news will also be needed. This same box will also be used to display live broadcasts in the future.
A $${\color{blue}GET}$$ request was generated for the videos, and they were placed one by one with a **Swiper component**.

```
export default function YoutubeSlider({ videos }: { videos: Video[] }) {
  return (
    <div style={{ color: "white", textAlign: "center", paddingBottom: "2rem" }}>
      <h2 className="mb-4 text-red-500 text-3xl text-center justify-center flex"> You
        <span className="text-white text-3xl">Tube</span></h2>
        <span className="text-sm">Conoce nuevas noticias en nuesto canal</span>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1} // 👉 solo un video visible
        className="w-full max-w-3xl mx-auto "
      >
        {videos.map((video: Video) => (
          <SwiperSlide key={video.id.videoId}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}?showinfo=0&controls=1`}
              className="w-full h-[400px] rounded-lg"
              allowFullScreen
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

```

![chanell youtube](/public/youtubevideo.png)

### **Sponsor** Box

lo que se hizo aca es basicamente generar un mapeo de las fotos exceptuando su nombre y solo agregarndole un id unico por cada pasada y generendo un efecto carrusel en bucle gracias a Swipe

```
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

```

this box to belong to a carrusel the sponsors and This has an effect which is not active; the hover will be displayed as inactive in gray, otherwise their respective colors will be displayed.
![Sponsors](/public/Sponsors_line.png)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Compa-Dmusic
