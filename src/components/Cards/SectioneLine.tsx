import { Box } from "@mui/material";
import React from "react";

export const SectioneLine = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "gray",
        height: "300px",
        width: "100%",
        position: "absolute",
      }}
    >
      {/* Este  va a ser el titulo de la seccion */}
      <Box
        sx={{
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1
          style={{
            fontFamily: "arial , system-ui",
            fontSize: "2.3rem",
            fontWeight: 600,
            fontStyle: "italic",
            textTransform: "uppercase",
            color: "#880808",
          }}
        >
          Magazine Copamex Music
        </h1>
        <p
          style={{
            fontFamily: "Bitcount Grid Double, system-ui",
            fontSize: "1.2rem",
            fontWeight: 100,
            paddingRight: "53rem",
            fontStyle: "italic",
          }}
        >
          Sigue el camino de tus artistas favoritos y entérate de todas las
          noticias del espectáculo, en la nuestra revista en linea.
          <a href="*" style={{ color: "#880808", marginLeft: "2px" }}>
            Descarga aquí
          </a>
        </p>
      </Box>
    </Box>
  );
};
