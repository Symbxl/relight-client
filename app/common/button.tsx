import { Button as Btn } from '@mui/material';

export default function Button({ children }: any) {
  return (
    <Btn
      variant="outlined"
      size="large"
      href={"#"}
      sx={{
        borderRadius: '8px',
        padding: { xs: '13px 20px', sm: '13px 34px' },
        mardin: { xs: '1rem', sm: '2rem' },
        boxShadow: '3px 4px 6px rgba(0, 0, 0, 0.2)',
        color: "#fff",
        '&:hover': {
          backgroundColor: 'primary.dark',
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      {children}
    </Btn>
  )
}