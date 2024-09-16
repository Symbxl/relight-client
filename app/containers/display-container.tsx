
import { Container as C } from '@mui/material';

export const Container = ({ children }: any) => <C
  sx={{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }}>{children}</C>