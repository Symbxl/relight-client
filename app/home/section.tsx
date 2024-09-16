import React from 'react';
import { Container, Typography, Box } from '@mui/material';

// Define the type for props
interface SectionProps {
  title?: string;
  subtitle?: string;
  colorSub?: string;
  secondSub?: string;
  thirdSub?: string;
  fourthSub?: string;
  fithSub?: string;
  sixthSub?: string;
  seventhSub?: string;
  margin?: string;
  titleColor?: string;
  subtitleColor?: string;
  bgColor?: string;
  fontFamily?: string;
  titleSize?: { xs?: string | number, sm?: string | number, md?: string | number };
  subSize?: { xs?: string | number, sm?: string | number, md?: string | number };
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  colorSub,
  secondSub,
  thirdSub,
  fourthSub,
  fithSub,
  sixthSub,
  seventhSub,
  margin = "0",
  titleColor = "hsl(210, 100%, 50%)",
  subtitleColor = "hsl(210, 100%, 50%)",
  titleSize = { xs: "1rem", sm: "1.2rem", md: "1.35rem" }, // Default values with more adaptability
  subSize = { xs: "1.5rem", sm: "1.9rem", md: "2rem" }, // Default values with more adaptability
  bgColor = "transparent",
  fontFamily = '"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
}) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start", // Align items to the start (left)
        textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
        paddingX: { xs: 1, sm: 3 }, // Reduced padding for a smaller section
        paddingY: { xs: 1, sm: 0 }, // Reduced padding for a smaller section

        maxWidth: "100%",
        backgroundColor: bgColor,
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: `${margin}`,
        height: "auto",
      }}
    >
      <Typography
        fontFamily={fontFamily}
        fontWeight="700"
        fontSize={titleSize} // Responsive font size
        variant="h2"
        color={titleColor}
        sx={{ mb: { xs: 1, sm: 2 } }} // Adjusted margin-bottom
      >
        {title}
      </Typography>
      <Typography
        fontFamily={fontFamily}
        fontWeight="700"
        fontSize={subSize} // Responsive font size
        variant="h2"
        sx={{ mb: { xs: 2, sm: 3 } }} // Adjusted margin-bottom
      >
        {subtitle}
        <Box
          component="span"
          sx={{ color: subtitleColor, fontWeight: "700" }}
        >
          &nbsp;{colorSub}
        </Box>
        <br />
        {secondSub}

        <Box
          component="span"
          sx={{ color: subtitleColor, fontWeight: "700" }}
        >
          &nbsp;{thirdSub}
        </Box>
        <Box
          component="span"
          sx={{ fontWeight: "700" }}
        >
          &nbsp;{fourthSub}&nbsp;
        </Box>
        <br></br>
        <Box
          component="span"
          sx={{ color: subtitleColor, fontWeight: "700" }}
        >
          {fithSub}&nbsp;
        </Box>

        <Box
          component="span"
          sx={{ color: subtitleColor, fontWeight: "700" }}
        >
          {sixthSub}&nbsp;
        </Box>
        {seventhSub}&nbsp;
      </Typography>
    </Container>
  );
};

export default Section;
