"use client";

import Section from "./section";
import { Container, Box } from "@mui/material";
import Navigation from "./navbar";

export default function Header() {
  return (
    <Container
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "3rem 0",
        textAlign: "center",
      }}
    >
      <Navigation />


      <Section
        subtitle="Live brighter with"
        secondSub="Relight Exterior Lighting"
        titleColor="#fff"
        subtitleColor="#fff"
        bgColor="transparent" // Keep it transparent to allow the video to show through
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        titleSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
        subSize={{ xs: "2rem", sm: "3rem", md: "4rem" }} // Adjust size for better scaling
      />
    </Container>
  );
}
