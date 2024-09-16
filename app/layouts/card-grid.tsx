import React from 'react';
import { Box } from '@mui/material';
import { PhoneContainer } from '../containers/phone-container';


const PhoneCardLayout = () => {
  const phoneData = [
    { url: "https://framerusercontent.com/assets/Y5JWtBxLLnL6s4zRbzM7VCniWMs.mp4", title: "A bright new future.", subtitle: "We've rebuilt everything from the ground up. New interactions. New visuals. New experience." },
    { url: "https://framerusercontent.com/images/BzFcQ6E4kSLCxqDCW5lcozO5c.jpeg", img: true, height: "250px", title: "Gameday, Holiday, Security, Accent & more", subtitle: "Our new interface is great for every occassion with pattern type animates like a firework, sending LEDs up into their explosive finale." },
    { url: "https://framerusercontent.com/images/X8VEE7Yik9551XzG9IrdbAZlW6s.png", img: true, height: "250px", title: "Manage zones from different controllers in one place.", subtitle: "If you have multiple controllers, access all your lights in the same view." },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {phoneData.map((phone, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            overflow: 'hidden', // Ensure content doesn’t overflow
          }}
        >
          <PhoneContainer
            url={phone.url}
            img={phone.img || false}
            height={phone.height || "auto"}
            title={phone.title}
            subtitle={phone.subtitle}

          />
        </Box>
      ))}
    </Box>
  );
};

export default PhoneCardLayout;
