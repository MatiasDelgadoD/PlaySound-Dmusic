//  import React from 'react';
//  import { Box, Card, Grid } from '@mui/material';

//  const CardSection = () => {
//    return (
//      <Box
//        sx={{
//          padding: '34px',
//          backgroundColor: 'var(--sk-fill-secondary, rgb(250,250,252))',
//          color: 'var(--sk-body-text-color, rgb(29,29,31))',
//          letterSpacing: '-0.022em',
//          lineHeight: 1.47059,
//          WebkitFontSmoothing: 'antialiased',
//        }}
//      >
//        <Grid container spacing={3}>
//          {[1, 2, 3, 4, 5, 6].map((item) => (
//            <Grid item xs={12} sm={6} md={4} key={item}>
//              <Card
//                sx={{
//                  backgroundColor: 'var(--sk-fill, rgb(255,255,255))',
//                  borderRadius: '12px',
//                  boxShadow: '0 4px 6px var(--sk-fill-gray-quaternary-alpha, rgba(0,0,0,0.08))',
//                  height: '200px',
//                  transition: 'transform 0.2s ease-in-out',
//                  '&:hover': {
//                    transform: 'scale(1.02)',
//                    boxShadow: '0 6px 8px var(--sk-fill-gray-tertiary-alpha, rgba(0,0,0,0.16))',
//                  },
//                }}
//              >
//                {/* Card content will go here */}
//              </Card>
//            </Grid>
//          ))}
//        </Grid>
//      </Box>
//    );
//  };

//  export default CardSection;