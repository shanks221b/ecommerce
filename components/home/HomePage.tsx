'use client';

import { useState } from 'react';

import {
  Chip,
  Grid,
  Box,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Fade,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: {
          xs: 'auto',
          md: 'calc(100vh - 120px)',
        },
        overflow: 'hidden',
        background: 'linear-gradient(135deg,#FFF8F3 0%,#F9E4EA 55%,#F4D4DD 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: {
            xs: 400,
            md: 800,
          },
          height: {
            xs: 400,
            md: 800,
          },
          borderRadius: '50%',
          background: 'radial-gradient(circle,#E9AFC0 0%,rgba(233,175,192,0) 70%)',
          right: {
            xs: '-150px',
            md: '-200px',
          },
          top: {
            xs: '150px',
            md: '-80px',
          },
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
        }}
      >
        <Box
          sx={{
            minHeight: {
              xs: 'auto',
              md: 'calc(100vh - 120px)',
            },
            display: 'flex',
            alignItems: 'center',
            py: {
              xs: 8,
              md: 5,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              position: 'relative',
            }}
          >
            <Stack
              spacing={3}
              sx={{
                width: {
                  xs: '100%',
                  md: '48%',
                },
                position: 'relative',
                zIndex: 3,
              }}
            >
              {/* Smaller luxury label */}
              <Chip
                label="LUXURY HOME FRAGRANCE"
                sx={{
                  width: 'fit-content',
                  height: 22,
                  bgcolor: '#C86B83',
                  color: '#fff',
                  fontWeight: 800,
                  letterSpacing: 1,
                  fontSize: '0.6rem',

                  '& .MuiChip-label': {
                    px: 1.2,
                  },
                }}
              />

              <Typography
                sx={{
                  fontWeight: 950,
                  color: '#351E27',
                  fontSize: {
                    xs: '3.2rem',
                    md: '5.8rem',
                  },
                  letterSpacing: '-3px',
                  lineHeight: 0.92,
                }}
              >
                Make your
                <br />
                home bloom.
              </Typography>

              <Typography
                sx={{
                  color: '#6B555B',
                  maxWidth: 520,
                  fontSize: {
                    xs: '1rem',
                    md: '1.15rem',
                  },
                  lineHeight: 1.9,
                }}
              >
                Transform the spaces you love with signature aromas crafted around comfort,
                memories, and the feeling of home.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  width: 'fit-content',
                  px: 5,
                  py: 1.8,
                  borderRadius: 10,
                  bgcolor: '#C86B83',
                  textTransform: 'none',
                  fontWeight: 900,
                  fontSize: '1rem',
                  boxShadow: '0 20px 50px rgba(200,107,131,.35)',
                  '&:hover': {
                    bgcolor: '#AE526D',
                  },
                }}
              >
                Buy Your Bloomifier
              </Button>
            </Stack>

            <Box
              sx={{
                position: {
                  xs: 'relative',
                  md: 'absolute',
                },

                width: {
                  xs: '100%',
                  md: '55%',
                },

                height: {
                  xs: 450,
                  md: 700,
                },

                right: {
                  xs: 0,
                  md: -40,
                },

                bottom: {
                  xs: 0,
                  md: -80,
                },

                mt: {
                  xs: 6,
                  md: 0,
                },

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: {
                    xs: 320,
                    md: 520,
                  },
                  height: {
                    xs: 320,
                    md: 520,
                  },
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,.45)',
                  backdropFilter: 'blur(20px)',
                }}
              />

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  width: {
                    xs: 320,
                    md: 500, // Bigger circle on desktop
                  },
                  height: {
                    xs: 320,
                    md: 500,
                  },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  filter: 'drop-shadow(0 40px 50px rgba(80,30,50,.25))',
                }}
              >
                <Box
                  component="img"
                  src="https://hivagi.in/cdn/shop/files/1_4038530d-6793-4e61-8b97-906972eb90c3.jpg?v=1683281865&width=1100"
                  alt="Bloomifier Boozy Coffee aroma diffuser"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 4,

                  bottom: {
                    xs: 20,
                    md: 80,
                  },

                  left: {
                    xs: '10%',
                    md: '15%',
                  },

                  background: 'rgba(255,255,255,.75)',

                  backdropFilter: 'blur(15px)',

                  borderRadius: 5,

                  px: 3,
                  py: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 950,
                    color: '#351E27',
                    fontSize: '1.2rem',
                  }}
                >
                  Boozy Coffee
                </Typography>

                <Typography
                  sx={{
                    color: '#6B555B',
                    fontSize: '.9rem',
                  }}
                >
                  Roasted coffee • Vanilla • Amber
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function StorySection() {
  const stories = [
    {
      image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13',
      title: 'Boozy Coffee',
      text: 'A warm coffee-inspired aroma that fills your home with comfort, richness, and calm.',
    },
    {
      image:
        'https://media.istockphoto.com/id/174655938/photo/rose-background.jpg?s=612x612&w=0&k=20&c=nWPBU5SpfPYmRDtlTlVNzRB-SFRnFAHeeWh08b-YY14=',
      title: 'Eternal Rose',
      text: 'A timeless floral fragrance that brings softness, romance, and elegance into your space.',
    },
    {
      image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919',
      title: 'Midnight Chocolate',
      text: 'A deep, indulgent aroma inspired by rich chocolate and cozy evenings at home.',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#F9E4EA',
        py: {
          xs: 7,
          md: 10,
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Typography
            sx={{
              color: '#C86B83',
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: '0.85rem',
            }}
          >
            OUR SIGNATURE AROMAS
          </Typography>

          <Typography
            sx={{
              color: '#351E27',
              fontWeight: 900,
              fontSize: {
                xs: '2rem',
                md: '3.2rem',
              },
              lineHeight: 1.15,
            }}
          >
            Fragrances made for
            <br />
            the moments you love
          </Typography>

          <Typography
            sx={{
              maxWidth: 600,
              color: '#6B555B',
              lineHeight: 1.8,
            }}
          >
            Discover Bloomifier&apos;s signature aromas, each designed to create a different feeling
            inside your home.
          </Typography>
        </Stack>

        <Grid
          container
          spacing={3}
          sx={{
            flexWrap: 'nowrap',
            '@media (max-width: 900px)': {
              flexWrap: 'wrap',
            },
          }}
        >
          {stories.map((item) => (
            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
              key={item.title}
            >
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: '#FFF8F3',
                  border: '1px solid rgba(200,107,131,0.18)',
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 180,
                    objectFit: 'cover',
                  }}
                />

                <CardContent
                  sx={{
                    p: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#351E27',
                      fontWeight: 900,
                      fontSize: '1.25rem',
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#6B555B',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                    }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function CollectionSection() {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13',
      name: 'Boozy Coffee',
      notes: 'Espresso • Vanilla • Amber',
      description:
        'A comforting embrace of roasted coffee warmth, crafted for slow mornings and cozy evenings.',
    },
    {
      image:
        'https://media.istockphoto.com/id/174655938/photo/rose-background.jpg?s=612x612&w=0&k=20&c=nWPBU5SpfPYmRDtlTlVNzRB-SFRnFAHeeWh08b-YY14=',
      name: 'Eternal Rose',
      notes: 'Rose Petals • Soft Musk • Peony',
      description:
        'A timeless floral fragrance that fills your home with elegance, softness, and romance.',
    },
    {
      image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919',
      name: 'Midnight Chocolate',
      notes: 'Dark Cocoa • Vanilla • Warm Spice',
      description: 'A rich indulgent aroma that transforms quiet evenings into beautiful rituals.',
    },
  ];

  const [active, setActive] = useState(0);

  const nextProduct = () => {
    setActive((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const previousProduct = () => {
    setActive((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const product = products[active];

  return (
    <Box
      sx={{
        backgroundColor: '#F9E4EA',
        py: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            mb: 6,
          }}
        >
          <Typography
            sx={{
              color: '#C86B83',
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            THE BLOOMIFIER COLLECTION
          </Typography>

          <Typography
            sx={{
              color: '#351E27',
              fontWeight: 900,
              fontSize: {
                xs: '2.2rem',
                md: '3.4rem',
              },
            }}
          >
            Discover your
            <br />
            signature aroma
          </Typography>

          <Typography
            sx={{
              color: '#6B555B',
              maxWidth: 600,
              lineHeight: 1.8,
            }}
          >
            Every fragrance creates a different feeling. Find the aroma that belongs in your home.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: {
              xs: 1,
              md: 3,
            },
          }}
        >
          <IconButton
            onClick={previousProduct}
            sx={{
              color: '#C86B83',
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <Fade in timeout={300}>
            <Card
              elevation={0}
              sx={{
                flex: 1,
                borderRadius: 5,
                overflow: 'hidden',
                background: '#FFF8F3',
                border: '1px solid rgba(200,107,131,.18)',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  height: {
                    xs: 240,
                    md: 380,
                  },
                  objectFit: 'cover',
                }}
              />

              <CardContent
                sx={{
                  p: {
                    xs: 3,
                    md: 5,
                  },
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: '#351E27',
                    fontWeight: 900,
                    fontSize: {
                      xs: '1.6rem',
                      md: '2rem',
                    },
                  }}
                >
                  {product.name}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: '#C86B83',
                    fontWeight: 700,
                  }}
                >
                  {product.notes}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: '#6B555B',
                    lineHeight: 1.8,
                  }}
                >
                  {product.description}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    px: 5,
                    py: 1.3,
                    borderRadius: 8,
                    backgroundColor: '#C86B83',
                    textTransform: 'none',
                    fontWeight: 800,

                    '&:hover': {
                      backgroundColor: '#AE526D',
                    },
                  }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Fade>

          <IconButton
            onClick={nextProduct}
            sx={{
              color: '#C86B83',
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

function FeelingSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#FDF0F3',
        py: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{
            xs: 5,
            md: 8,
          }}
          sx={{
            alignItems: 'center',
          }}
        >
          {/* Image */}

          <Grid size={{ xs: 12, md: 6 }}>
            <CardMedia
              component="img"
              image="https://cdn.shopify.com/s/files/1/0574/7926/6364/files/26_6f3eda17-4299-4668-aa75-3aab565c4f40_480x480.jpg?v=1683285356"
              alt="Warm luxurious home interior"
              sx={{
                width: '100%',
                height: {
                  xs: 340,
                  md: 520,
                },
                borderRadius: 6,
                objectFit: 'cover',
                filter: 'saturate(0.9)',
              }}
            />
          </Grid>

          {/* Text */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  color: '#C86B83',
                  fontWeight: 800,
                  letterSpacing: 2,
                  fontSize: '0.85rem',
                }}
              >
                THE BLOOMIFIER MOMENT
              </Typography>

              <Typography
                sx={{
                  color: '#351E27',
                  fontWeight: 900,
                  fontSize: {
                    xs: '2.2rem',
                    md: '3.2rem',
                  },
                  lineHeight: 1.15,
                }}
              >
                More than a fragrance.
                <br />A feeling to make you look forward to coming home.
              </Typography>

              <Typography
                sx={{
                  color: '#6B555B',
                  lineHeight: 1.9,
                  fontSize: '1.05rem',
                }}
              >
                The smallest details often create the biggest memories. The aroma that welcomes you
                after a long day. The scent that fills a quiet morning. The fragrance your guests
                remember.
              </Typography>

              <Typography
                sx={{
                  color: '#6B555B',
                  lineHeight: 1.9,
                  fontSize: '1.05rem',
                }}
              >
                Bloomifier transforms everyday spaces into beautiful moments you want to return to.
              </Typography>

              <Stack
                spacing={1.5}
                sx={{
                  pt: 1,
                }}
              >
                <Typography
                  sx={{
                    color: '#351E27',
                    fontWeight: 700,
                  }}
                >
                  ☾ Slow mornings filled with warmth
                </Typography>

                <Typography
                  sx={{
                    color: '#351E27',
                    fontWeight: 700,
                  }}
                >
                  ✦ Cozy evenings made unforgettable
                </Typography>

                <Typography
                  sx={{
                    color: '#351E27',
                    fontWeight: 700,
                  }}
                >
                  ♡ Memories created around home
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function GiftSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#F9E4EA',
        py: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 6,
            overflow: 'hidden',
            backgroundColor: '#FFF8F3',
            border: '1px solid rgba(200,107,131,0.15)',
          }}
        >
          <Grid
            container
            sx={{
              alignItems: 'center',
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <CardMedia
                component="img"
                image="https://cdn.shopify.com/s/files/1/0574/7926/6364/files/10_c069be92-4aba-4936-9178-1786de3bcaff_480x480.jpg?v=1683286034"
                alt="Elegant home gift"
                sx={{
                  height: {
                    xs: 320,
                    md: 520,
                  },
                  objectFit: 'cover',
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                spacing={3}
                sx={{
                  p: {
                    xs: 4,
                    md: 7,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#C86B83',
                    fontWeight: 800,
                    letterSpacing: 2,
                    fontSize: '0.85rem',
                  }}
                >
                  THE PERFECT GIFT
                </Typography>

                <Typography
                  sx={{
                    color: '#351E27',
                    fontWeight: 900,
                    fontSize: {
                      xs: '2rem',
                      md: '3rem',
                    },
                    lineHeight: 1.15,
                  }}
                >
                  A beautiful detail
                  <br />
                  they will remember.
                </Typography>

                <Typography
                  sx={{
                    color: '#6B555B',
                    lineHeight: 1.9,
                  }}
                >
                  From new homes to meaningful moments, Bloomifier creates gifts that feel personal.
                  A fragrance is more than a scent — it becomes part of someone&apos;s everyday
                  story.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    alignSelf: 'flex-start',
                    backgroundColor: '#C86B83',
                    color: '#fff',
                    borderRadius: 8,
                    px: 5,
                    py: 1.3,
                    textTransform: 'none',
                    fontWeight: 800,

                    '&:hover': {
                      backgroundColor: '#AE526D',
                    },
                  }}
                >
                  Buy Your Bloomifier
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

function LoveSection() {
  const moments = [
    {
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      quote: 'Boozy Coffee became part of my morning ritual. My home finally feels like my own.',
    },
    {
      image: 'https://m.media-amazon.com/images/I/61co5BQmeUL.jpg',
      quote: 'Eternal Rose makes my evenings feel softer, calmer, and more beautiful.',
    },
    {
      image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919',
      quote: 'Midnight Chocolate is the scent everyone asks about when they visit.',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#FDF0F3',
        py: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}

        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Typography
            sx={{
              color: '#C86B83',
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: '0.85rem',
            }}
          >
            LOVED BY HOMES
          </Typography>

          <Typography
            sx={{
              color: '#351E27',
              fontWeight: 900,
              fontSize: {
                xs: '2.2rem',
                md: '3.2rem',
              },
              lineHeight: 1.15,
            }}
          >
            Testimonials
          </Typography>

          <Typography
            sx={{
              color: '#6B555B',
              maxWidth: 600,
              lineHeight: 1.8,
            }}
          >
            Over 1000+ happy homes have bloomed with Bloomifier.
            <br />
            Let your favorite scents become part of everyday moments, memories, and spaces.
          </Typography>
        </Stack>

        {/* Cards */}

        <Grid
          container
          spacing={3}
          sx={{
            flexWrap: 'nowrap',

            '@media (max-width:900px)': {
              flexWrap: 'wrap',
            },
          }}
        >
          {moments.map((moment) => (
            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
              key={moment.quote}
              sx={{
                display: 'flex',
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: 5,
                  backgroundColor: '#FFF8F3',
                  border: '1px solid rgba(200,107,131,0.18)',
                }}
              >
                <CardMedia
                  component="img"
                  image={moment.image}
                  alt="Bloomifier home moment"
                  sx={{
                    width: '100%',
                    height: {
                      xs: 220,
                      md: 260,
                    },
                    objectFit: 'cover',
                  }}
                />

                <Stack
                  spacing={2}
                  sx={{
                    flex: 1,
                    minHeight: 220,
                    p: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#C86B83',
                      fontSize: '2rem',
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    “
                  </Typography>

                  <Typography
                    sx={{
                      color: '#351E27',
                      fontWeight: 600,
                      lineHeight: 1.8,
                    }}
                  >
                    {moment.quote}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function FinalCTASection() {
  return (
    <Box
      sx={{
        backgroundColor: '#F9E4EA',
        py: {
          xs: 9,
          md: 14,
        },
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#C86B83',
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: '0.85rem',
            }}
          >
            BEGIN YOUR RITUAL
          </Typography>

          <Typography
            sx={{
              color: '#351E27',
              fontWeight: 900,
              fontSize: {
                xs: '2.3rem',
                md: '3.6rem',
              },
              lineHeight: 1.12,
            }}
          >
            Let your home bloom.
          </Typography>

          <Typography
            sx={{
              color: '#6B555B',
              maxWidth: 560,
              lineHeight: 1.9,
              fontSize: '1.05rem',
            }}
          >
            Discover the fragrance that becomes part of your everyday moments.
          </Typography>

          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1603006905003-be475563bc59"
            alt="Beautiful scented home atmosphere"
            sx={{
              width: '100%',
              height: {
                xs: 280,
                md: 430,
              },
              borderRadius: 6,
              objectFit: 'cover',
            }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#C86B83',
              color: '#FFFFFF',
              borderRadius: 8,
              px: 6,
              py: 1.5,
              textTransform: 'none',
              fontWeight: 800,
              fontSize: '1rem',

              '&:hover': {
                backgroundColor: '#AE526D',
              },
            }}
          >
            Buy Your Bloomifier
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <CollectionSection />
      <FeelingSection />
      <GiftSection />
      <LoveSection />
      <FinalCTASection />
    </>
  );
}

//break
