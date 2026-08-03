import { Box, Typography, Divider, styled } from '@mui/material';

export const FooterRoot = styled(Box)(({ theme }) => ({
  backgroundColor: '#351E27',
  color: '#FFF8F3',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(5),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: theme.spacing(4),
  },
}));

export const BrandTitle = styled(Typography)({
  color: '#F7D7DF',
  fontWeight: 900,
  fontSize: '2rem',
});

export const BrandDescription = styled(Typography)({
  color: '#E8CDD4',
  lineHeight: 1.8,
  maxWidth: 320,
  fontSize: '0.95rem',
});

export const ColumnHeading = styled(Typography)({
  color: '#F7D7DF',
  fontWeight: 800,
});

export const LinkItem = styled(Typography)({
  color: '#E8CDD4',
  fontSize: '0.95rem',
  cursor: 'pointer',
  '&:hover': {
    color: '#fff',
  },
});

export const FooterDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  borderColor: 'rgba(255,255,255,0.15)',
}));

export const Copyright = styled(Typography)({
  color: '#D9BBC4',
  fontSize: '0.85rem',
  textAlign: 'center',
});