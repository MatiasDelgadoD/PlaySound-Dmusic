'use client';

import React, { useState } from "react";
import { Button, Box, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

interface DropdownButtonProps {
  label: string;
  items?: string[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ label, items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        sx={{
          color: "white",
          backgroundColor: "transparent",
          "&:hover": { color: "#b44343" },
        }}
      >
        {label}
      </Button>

      {open && items.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -20 }}
          transition={{ 
            duration: 1.2,
            ease: "easeInOut",
            opacity: { duration: 1 },
            y: { duration: 1.5 }
          }}
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            overflow: "hidden",
            zIndex: 1000,
            top: "64px",
          }}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: "none",
              padding: "20px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {items.map((item, index) => (
              <ListItem 
                key={index} 
                sx={{ 
                  justifyContent: "center",
                  padding: "10px 0",
                  width: "auto",
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    color: "white",
                    textAlign: "center",
                    cursor: "pointer",
                    "& .MuiTypography-root": {
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#b44343",
                      },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </motion.div>
      )}
    </Box>
  );
};

export default DropdownButton;
