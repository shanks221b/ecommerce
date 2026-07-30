import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Page = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
});

export const Card = styled(Paper)({
  width: 400,
  padding: 32,
});

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});
