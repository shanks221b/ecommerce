'use client';

import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box, IconButton } from '@mui/material';
import {
  BrandStrip,
  BrandStripText,
  StyledAppBar,
  StyledToolbar,
  MobileMenuButton,
  LogoLink,
  LogoText,
  DesktopNav,
  NavButton,
} from './styles';
import { navLinks } from './constants';

export default function Header() {
  return (
    <Box>
      {/* Top Brand Strip */}
      <BrandStrip>
        <BrandStripText>Welcome to Bloomifier</BrandStripText>
      </BrandStrip>

      {/* Main Header */}
      <StyledAppBar position="sticky" elevation={0}>
        <StyledToolbar>
          {/* Mobile Menu */}
          <MobileMenuButton>
            <MenuIcon />
          </MobileMenuButton>

          {/* Logo */}
          <LogoLink component={Link} href="/">
            <LogoText>Bloomifier</LogoText>
          </LogoLink>

          {/* Desktop Links */}
          <DesktopNav>
            {navLinks.map((link) => (
              <NavButton key={link.label} component={Link} href={link.href}>
                {link.label}
              </NavButton>
            ))}
          </DesktopNav>

          {/* Cart */}
          <IconButton sx={{ color: '#C96B83' }}>
            <Badge badgeContent={0} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}