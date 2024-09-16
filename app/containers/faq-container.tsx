import { Container } from "@mui/material"

export const FaqContainer = ({ children }: any) => <Container sx={{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",
  margin: "3rem 0",
}}>{children}</Container>
