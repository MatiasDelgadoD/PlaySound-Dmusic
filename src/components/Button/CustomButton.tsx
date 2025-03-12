import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, sx, ...props }) => {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "transparent",
        "&:hover": { color: "#b44343" },
        ...sx, // Permite sobrescribir estilos si se pasan
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
