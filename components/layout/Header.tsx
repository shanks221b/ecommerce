"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bestsellers", href: "/bestsellers" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  return (
    <Box>
      {/* Top Brand Strip */}
      <Box
        sx={{
          height: 42,
          bgcolor: "#C96B83",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: 0.8,
          }}
        >
          Welcome to Bloomifier
        </Typography>
      </Box>

      {/* Main Header */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          color: "#C96B83",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar
          sx={{
            height: { xs: 70, md: 85 },
            maxWidth: 1300,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >

          {/* Mobile Menu */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#C96B83",
            }}
          >
            <MenuIcon />
          </IconButton>


          {/* Logo */}
          <Box
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
              color: "#C96B83",
              position: { xs: "absolute", md: "static" },
              left: { xs: "50%", md: "auto" },
              transform: { xs: "translateX(-50%)", md: "none" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "1.8rem", md: "2.3rem" },
                letterSpacing: 1,
              }}
            >
              Bloomifier
            </Typography>
          </Box>


          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              mx: "auto",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                href={link.href}
                sx={{
                  color: "#333",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    color: "#C96B83",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>


          {/* Cart */}
          <IconButton
            sx={{
              color: "#C96B83",
            }}
          >
            <Badge badgeContent={0} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}