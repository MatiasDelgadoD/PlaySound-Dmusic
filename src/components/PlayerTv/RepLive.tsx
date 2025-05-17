"use client";

import { Typography } from "@mui/material";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import Hls from "hls.js";
import VideoControls from "./VideoControls";

import Image from "next/image";
import Logo from "../../../public/MusicTv.png";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // reproducir por defecto

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleFullScreen = useCallback(() => {
    const player = videoRef.current;
    if (player) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        player.requestFullscreen().catch((err) => {
          console.error("Error enabling fullscreen:", err);
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const hls = new Hls();

    hls.loadSource(
      "https://cdn.mycloudstream.io/hls/live/broadcast/t9zoyztb/index.m3u8"
    );
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      if (isPlaying) video.play();
    });

    return () => {
      hls.destroy();
    };
  }, [isPlaying]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "100%",
            width: "100%",
            height: "600px",
            borderRadius: "30px",
            overflow: "hidden",
            backgroundColor: "#000",
          }}
        >
          <video
            ref={videoRef}
            controls={true}
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <Box>
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 1,
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "20px",
              color: "white",
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: "0.9rem",
                  opacity: 0.8,
                  letterSpacing: "0.1em",
                }}
              >
                Contenido en vivo
              </Typography>
            </Box>

            <VideoControls
              isPlaying={isPlaying}
              onPlayPause={togglePlay}
              onFullScreen={toggleFullScreen}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
