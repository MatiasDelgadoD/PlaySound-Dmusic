'use client';

import React from 'react';
import { Button, Box } from '@mui/material';
import { PlayArrow, Pause, Fullscreen } from '@mui/icons-material';

interface VideoControlsProps {
  isPlaying: boolean;
  onPlayPause: (e: React.MouseEvent) => void;
  onFullScreen: (e: React.MouseEvent) => void;
}

const VideoControls = ({ isPlaying, onPlayPause, onFullScreen }: VideoControlsProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'row',
        justifyContent: 'center',
        mt: 0.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        <Button 
          onClick={onPlayPause} 
          sx={{ 
            color: 'grey',
            backgroundColor: 'rgb(255, 255, 255, 0.79)',
            borderRadius: '100%',
            minWidth: '8px',
            width: '37px',
            height: '37px',
            '&:hover': {
              color:'black',
              backgroundColor: 'rgb(255 255 255 0.9))'
            }
          }}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </Button>

        <Button 
          onClick={onFullScreen} 
          sx={{ 
            color: 'grey',
            backgroundColor: 'rgb(255, 255, 255, 0.79)',
            borderRadius: '8px',
            minWidth: '8px',
            width: '37px',
            height: '37px',
            '&:hover': {
              color:'black',
              backgroundColor: 'rgb(255 255 255 0.9))'
            }
          }}
        >
          <Fullscreen />
        </Button>
      </Box>
    </Box>
  );
};

export default VideoControls;