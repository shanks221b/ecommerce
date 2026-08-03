import Link from 'next/link';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, styled } from '@mui/material';

export const BrandStrip = styled(Box)({
  height: 42,
  backgroundColor: '#C96B83',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const BrandStripText = styled(Typography)({
  color: '#fff',
  fontWeight: 800,
  fontSize: '1rem',
  letterSpacing: 0.8,
});

export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  color: '#C96B83',
  borderBottom: '1px solid #eee',
});

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: 70,
  maxWidth: 1300,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    height: 85,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  color: '#C96B83',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const LogoLink = styled(Box)(({ theme }) => ({
  textDecoration: 'none',
  color: '#C96B83',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  [theme.breakpoints.up('md')]: {
    position: 'static',
    left: 'auto',
    transform: 'none',
  },
})) as typeof Box;

export const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: '1.8rem',
  letterSpacing: 1,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.3rem',
  },
}));

export const DesktopNav = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: theme.spacing(4),
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const NavButton = styled(Button)({
  color: '#333',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    color: '#C96B83',
    backgroundColor: 'transparent',
  },
}) as typeof Button;