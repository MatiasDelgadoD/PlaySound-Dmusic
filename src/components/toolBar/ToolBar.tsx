import React from "react";
import Image from "next/image";
import Logo from "../../../public/Copamex-0001.png";
import {  Box } from "@mui/material";
import ButtonCustom from "@/components/Button/CustomButton";
import ButtonList from "../Button/ButtonList";
// Remove or comment out this line if you're not using Button
// import { Button } from '@mui/material';
const ToolBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "roboto",
        fontSize: 18,
        color: "white",
        position: "fixed",
        top: 0,         
        left: 0,         
        right: 0,      
        zIndex: 1000,   
        backgroundColor: "rgba(0, 0, 0, 0.8)", 
      }}
    >
      {/* este sector es de botones*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 2,
        }}
      >
        <Image src={Logo} alt={"Copamex"} height={10} width={180} />
        <Box
        sx={{
          left: "200px",
          position: "absolute",
          ":hover": {
            color: '#bc0000',   
        },
        color: 'red',}}>
          <ButtonCustom>Inicio</ButtonCustom>
          <ButtonCustom>Lanzamientos</ButtonCustom>
          <ButtonCustom>Radio en Vivo</ButtonCustom>
          <ButtonCustom>Distribucion musical</ButtonCustom>
          <ButtonCustom>Solicitud para eventos</ButtonCustom>
          <ButtonList label="Mas" items={[
            "Promociones",
            "Progranas especiales",
            "Medios de comunicacion",
            "Magazine",
            "Turismo",
            "Noticias",
            "Tour vivo en ti",
            "Serie: Hoy es un buen dia para aprender a vivir"
          ]} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <>cerrar sesion</>
        <ButtonCustom>Inicio</ButtonCustom>
      </Box>
    </Box>
  );
};

export default ToolBar;
