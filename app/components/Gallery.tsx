"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

interface Image {
  url: string;
  alt: string;
}

interface InstagramGalleryProps {
  images: Image[];
}

export const Gallery: React.FC<InstagramGalleryProps> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const scrollContainer = scrollRef.current;
    scrollContainer?.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 500; // Adjust this value to change scroll distance
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', p: 2 }}>
      {/* Left Arrow Button */}
      {showLeftArrow && (
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            zIndex: 10,
            bgcolor: 'background.paper',
            boxShadow: 3,
            transform: 'translateY(-50%)',
            '&:hover': { bgcolor: 'primary.main', color: 'white' },
          }}
          onClick={() => scroll('left')}
        >
          <ArrowBack />
        </IconButton>
      )}

      {/* Image List Container */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for WebKit browsers
        }}
      >
        {images?.map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              width: '100%',
              maxWidth: 800, // Increase to make images bigger
              scrollSnapAlign: 'center',
              p: 1,
              position: 'relative', // Positioning context for the overlay text
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
            {/* Overlay Text */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                bgcolor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                color: 'white',
                borderRadius: '0 0 8px 8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">
                {image.alt}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right Arrow Button */}
      {showRightArrow && (
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            zIndex: 10,
            bgcolor: 'background.paper',
            boxShadow: 3,
            transform: 'translateY(-50%)',
            '&:hover': { bgcolor: 'primary.main', color: 'white' },
          }}
          onClick={() => scroll('right')}
        >
          <ArrowForward />
        </IconButton>
      )}
    </Box>
  );
};

export default Gallery;
