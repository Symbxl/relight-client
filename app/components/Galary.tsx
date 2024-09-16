"use client"

import React, { useState } from 'react';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';

const imageData = [
  'https://via.placeholder.com/800x600?text=Image+1',
  'https://via.placeholder.com/800x600?text=Image+2',
  'https://via.placeholder.com/800x600?text=Image+3',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(imageData[0]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <Box
      sx={{
        maxWidth: '900px',
        margin: 'auto',
        textAlign: 'center',
        padding: 2,
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="600"
        color="text.primary"
        sx={{ marginBottom: 3, fontFamily: 'Roboto, sans-serif' }}
      >
        Featured Gallery
      </Typography>

      {/* Main Image Display */}
      <Card
        sx={{
          marginBottom: 4,
          boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="450"
          image={selectedImage}
          alt="Selected image"
          sx={{
            objectFit: 'cover',
            borderRadius: 2,
          }}
        />
      </Card>

      {/* Thumbnail Images */}
      <Grid container spacing={2} justifyContent="center">
        {imageData.map((image, index) => (
          <Grid item key={index} xs={4}>
            <Card
              onClick={() => handleThumbnailClick(image)}
              sx={{
                cursor: 'pointer',
                border: selectedImage === image ? '2px solid #1976d2' : '2px solid transparent',
                transition: 'border 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  border: '2px solid #1976d2',
                  boxShadow: '0 6px 10px rgba(25, 118, 210, 0.3)',
                },
                borderRadius: 1,
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={image}
                alt={`Thumbnail ${index + 1}`}
                sx={{
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
