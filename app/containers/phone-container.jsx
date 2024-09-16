import PhoneCard from "../components/PhoneCard";
import { Container, Typography, Box } from "@mui/material";
import '@fontsource/roboto';


export const PhoneContainer = ({ img, url, height, title, subtitle }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        backgroundColor: 'rgba(var(--callout-rgb), 0.8)',
        border: '1px solid rgba(var(--callout-border-rgb), 0.4)',
        borderRadius: 'var(--border-radius)',
        margin: 2,
        maxWidth: '425px',
        boxShadow: '0 4px 8px rgba(var(--foreground-rgb), 0.2)',
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Roboto, Arial, sans-serif',
          fontWeight: 'bold',
          fontSize: '1.3rem',
          color: 'rgba(var(--foreground-rgb), 1)',
          lineHeight: 1.4,
          marginBottom: '1rem',
        }}
      >
        {title}&nbsp;
        <Box
          component="span"
          sx={{
            fontWeight: 'normal',
            color: 'rgba(var(--foreground-rgb), 0.7)',
            fontSize: '1.2rem',
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </Box>
      </Typography>

      <PhoneCard height={height} url={url} img={img} />
    </Container>
  );
};
