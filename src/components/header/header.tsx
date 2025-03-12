import { Box, Container } from "@mui/material";
import React from "react";
import RepLive from "../PlayerTv/RepLive";
import Sponsors from "../sponsors/Sponsors";
import ArtistCard from '@/app/Presentaciones/page'

const Header: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{
        background: 'linear-gradient(10deg, rgb(250,36,10), rgba(0,0,10, 0.8))',
        width: "100%",
        minHeight: "100%",
        pt: 15,
      }}
    >
      
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            alignItems: 'center',
          }}
        >
          
          <RepLive />
          <Sponsors />
        </Box>
      </Container>
      <ArtistCard />

    </Box>
  );
};

export default Header;
