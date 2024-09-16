"use client"

import React, { useState } from 'react';
import { Card, CardMedia, Box } from '@mui/material';

interface Props {
  images?: string[]
}

const Carousel = ({ images = [
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024',
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024',
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024',
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024',
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024'
] }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', margin: 'auto', marginBottom: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: 585,
          transition: 'transform 0.5s ease',
          transform: `translateX(-${(currentIndex - 1) * 33.333}%)`, // Adjust for centering the middle image
          flex: '0 0 100%',
        }}
      >
        {images?.map((image, index) => (
          <Card
            key={index}
            sx={{
              flex: '0 0 33.333%', // Show three cards at a time
              height: 550,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.5s ease',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
              zIndex: index === currentIndex ? 1 : 0,
              cursor: 'pointer', // Pointer cursor on hover
              margin: '0 0.5rem', // Spacing between cards
            }}
            onClick={() => handleClick(index)}
          >
            <CardMedia
              component="img"
              image={image}
              alt={`Slide ${index + 1}`}
              sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
