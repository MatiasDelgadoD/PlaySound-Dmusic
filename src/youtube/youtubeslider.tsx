"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

type Video = {
  id: { 
    videoId: string,
    kind: string
  };
  snippet: {
    title: string;
  }
}

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
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              className="w-full h-[400px] rounded-lg"
              allowFullScreen
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
