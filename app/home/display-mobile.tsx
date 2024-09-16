"use client"

import Section from "./section";
import Compatible from "./compatible";
import { Container } from "@mui/material";
import PhoneCardLayout from "../layouts/card-grid";

export const DisplayMobile = () => {
  return <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}>

    <Section
      title="Download app &#8594;"
      subtitle="Enjoy precise"
      colorSub="accent lighting,"
      secondSub=" stunning"
      thirdSub="firework patterns,"
      fourthSub="zoning,"
      fithSub="scheduling & more"
      sixthSub="advanced features"
      seventhSub="with our new interface"
      titleColor="hsl(210, 100%, 50%)"
      subtitleColor="hsl(210, 100%, 50%)"
      bgColor="rgba(0, 0, 0, 0.05)"
      fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    />
    <PhoneCardLayout />
    <Compatible />
  </Container >
}

export default DisplayMobile;