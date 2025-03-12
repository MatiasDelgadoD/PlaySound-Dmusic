"use client";

import { Typography } from "@mui/material";
import React, { useState, useCallback } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import VideoControls from '../PlayerTv/VideoControls';

import Image from "next/image";
import Logo from '../../../public/MusicTv.png'

// Move ReactPlayer outside the component to prevent recreation on each render
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default button behavior
    setIsPlaying((prev) => !prev);
  }, []);

  const toggleFullScreen = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const player = document.getElementById("player") as HTMLElement;
    if (player) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        player.requestFullscreen().catch((err) => {
          console.error('Error attempting to enable fullscreen:', err);
        });
      }
    }
  }, []);

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
          <ReactPlayer
            id="player"
            url="https://videos.domint.net:4443/BKoffline.mp4"
            playing={isPlaying}
            width="100%"
            height="100%"
            controls={false}
            style={{
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
                backgroundColor:'none'
              }}
            />
          </Box>
          {/* Overlay con gradiente y texto */}
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
