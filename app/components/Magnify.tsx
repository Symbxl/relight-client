"use client";
import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';

// Styled components
const MagnifyContainer = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden', // Ensure that the image stays within the container
});

const Image = styled('img')({
  display: 'block',
  width: '100%',
  height: 'auto',
});

const Magnifier = styled('div')({
  position: 'absolute',
  border: '2px solid #000',
  borderRadius: '50%',
  width: '350px',
  height: '350px',
  pointerEvents: 'none',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '600%', // Zoomed in to the image
  backgroundPosition: '100% 80%', // Start from the bottom right
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Enhanced shadow for better visibility
  transition: 'transform 0.3s ease, background-position 0.3s ease', // Smooth transition
  right: '10px',
  bottom: '10px',
});

const Magnify = ({ src = "https://framerusercontent.com/images/EZ7htp8CvFohwrDhcn7rf3rk.webp?scale-down-to=2048", alt = "Sleek, well hidden track systems" }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MagnifyContainer>
      <Image src={src} alt={alt} />
      <Magnifier
        style={{
          backgroundImage: `url(${src})`,
          transform: `translateX(-${scrollPosition * 0.04}px)`, // Move magnifier to the left as you scroll
          backgroundPosition: `calc(80% - ${scrollPosition * 0.1}px) calc(60% - ${scrollPosition * 0.2}px)`, // Keep focus on bottom-right, but adjust slightly on scroll
        }}
      />
    </MagnifyContainer>
  );
};

export default Magnify;
