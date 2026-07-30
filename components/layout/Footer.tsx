"use client";

import {
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#351E27",
        color: "#FFF8F3",
        py: {
          xs: 6,
          md: 8,
        },
      }}
    >

      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: {
            xs: 3,
            md: 4,
          },
        }}
      >

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: {
              xs: 5,
              md: 4,
            },
          }}
        >

          {/* Brand */}

          <Stack spacing={2}>

            <Typography
              sx={{
                color:"#F7D7DF",
                fontWeight:900,
                fontSize:"2rem",
              }}
            >
              Bloomifier
            </Typography>


            <Typography
              sx={{
                color:"#E8CDD4",
                lineHeight:1.8,
                maxWidth:320,
                fontSize:"0.95rem",
              }}
            >
              Beautiful aroma diffusers crafted to use iconic scents to bloomify your home!
            </Typography>

          </Stack>



          {/* Company */}

          <Stack spacing={1.5}>

            <Typography
              sx={{
                color:"#F7D7DF",
                fontWeight:800,
              }}
            >
              Company
            </Typography>


            {[
              "About Us",
              "Our Story",
              "Contact Us",
              "FAQs",
            ].map((item)=>(
              <Typography
                key={item}
                sx={{
                  color:"#E8CDD4",
                  fontSize:"0.95rem",
                  cursor:"pointer",
                  "&:hover":{
                    color:"#fff",
                  },
                }}
              >
                {item}
              </Typography>
            ))}

          </Stack>




          {/* Shop */}

          <Stack spacing={1.5}>

            <Typography
              sx={{
                color:"#F7D7DF",
                fontWeight:800,
              }}
            >
              Shop
            </Typography>


            {[
              "Boozy Coffee",
              "Eternal Rose",
              "Midnight Chocolate",
            ].map((item)=>(
              <Typography
                key={item}
                sx={{
                  color:"#E8CDD4",
                  fontSize:"0.95rem",
                  cursor:"pointer",
                  "&:hover":{
                    color:"#fff",
                  },
                }}
              >
                {item}
              </Typography>
            ))}

          </Stack>




          {/* Contact */}

          <Stack spacing={1.5}>

            <Typography
              sx={{
                color:"#F7D7DF",
                fontWeight:800,
              }}
            >
              Follow Us
            </Typography>


            {[
              "Instagram",
              "Facebook",

            ].map((item)=>(
              <Typography
                key={item}
                sx={{
                  color:"#E8CDD4",
                  fontSize:"0.95rem",
                  cursor:"pointer",
                  "&:hover":{
                    color:"#fff",
                  },
                }}
              >
                {item}
              </Typography>
            ))}

          </Stack>


        </Box>



        <Divider
          sx={{
            my:5,
            borderColor:"rgba(255,255,255,0.15)",
          }}
        />


        <Typography
        sx={{
            color: "#D9BBC4",
            fontSize: "0.85rem",
            textAlign: "center",
        }}
        >
        © {new Date().getFullYear()} Bloomifier. All rights reserved.
        </Typography>


      </Box>

    </Box>
  );
}