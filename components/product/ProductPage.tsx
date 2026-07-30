"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  IconButton,
  Paper,
  Stack,
  Grid,
  Typography,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";



export default function ProductPage() {

  const products = [
    {
      name:"Boozy Coffee",
      notes:"Espresso • Vanilla • Amber",
      description:
        "A warm coffee-inspired aroma crafted to fill your home with comfort, richness, and calm.",
      images:[
        "https://cdn.shopify.com/s/files/1/0574/7926/6364/files/26_6f3eda17-4299-4668-aa75-3aab565c4f40_480x480.jpg?v=1683285356",
        "/images/products/boozy-coffee/2.jpg",
        "/images/products/boozy-coffee/3.jpg",
        "/images/products/boozy-coffee/4.jpg",
        "/images/products/boozy-coffee/5.jpg",
      ],
    },

    {
      name:"Eternal Rose",
      notes:"Rose Petals • Soft Musk • Peony",
      description:
        "A timeless floral fragrance that brings softness, romance, and elegance into your space.",
      images:[
        "https://cdn.shopify.com/s/files/1/0574/7926/6364/files/12_e992132c-7b6c-4c66-ab8f-ef226fd9d92d_480x480.jpg?v=1683285185",
        "/images/products/eternal-rose/2.jpg",
        "/images/products/eternal-rose/3.jpg",
        "/images/products/eternal-rose/4.jpg",
        "/images/products/eternal-rose/5.jpg",
      ],
    },

    {
      name:"Midnight Chocolate",
      notes:"Dark Cocoa • Vanilla • Warm Spice",
      description:
        "A rich indulgent aroma inspired by chocolate warmth and cozy evenings.",
      images:[
        "https://cdn.shopify.com/s/files/1/0574/7926/6364/files/13_b5b1d1ee-aeeb-498f-90ec-a4755483af00_480x480.jpg?v=1683285210",
        "/images/products/midnight-chocolate/2.jpg",
        "/images/products/midnight-chocolate/3.jpg",
        "/images/products/midnight-chocolate/4.jpg",
        "/images/products/midnight-chocolate/5.jpg",
      ],
    },
  ];


  const [activeProduct,setActiveProduct] = useState(0);

  const [activeImage,setActiveImage] = useState(0);

  const [purchaseType,setPurchaseType] =
    useState<"aroma"|"diffuser">("aroma");


  const product = products[activeProduct];


  const price =
    purchaseType==="aroma"
    ? 1999
    : 2499;


  const nextImage = () => {

    setActiveImage((prev)=>
      prev===product.images.length-1
      ? 0
      : prev+1
    );

  };


  const previousImage = () => {

    setActiveImage((prev)=>
      prev===0
      ? product.images.length-1
      : prev-1
    );

  };


  const changeProduct = (index:number)=>{

    setActiveProduct(index);
    setActiveImage(0);

  };


  return (

    <Box
      sx={{
        background:
        "linear-gradient(135deg,#FFF8F3 0%,#F9E4EA 55%,#F4D4DD 100%)",

        py:{
          xs:4,
          md:8,
        },
      }}
    >

      <Container maxWidth="xl">

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{ alignItems: "center" }}
      >


          {/* IMAGE */}


          <Grid size={{ xs: 12, md: 6 }}>

            <Stack
              spacing={3}
              sx={{
                alignItems: "center",
              }}
            >

              <Box
                sx={{
                  position:"relative",

                  width:{
                    xs:320,
                    md:560,
                  },

                  height:{
                    xs:320,
                    md:560,
                  },

                  borderRadius:"50%",

                  overflow:"hidden",

                  background:"#FFF8F3",

                  boxShadow:
                  "0 45px 100px rgba(80,30,50,.22)",
                }}
              >

                <CardMedia
                  component="img"

                  image={
                    product.images[activeImage]
                  }

                  alt={product.name}

                  sx={{
                    width:"100%",
                    height:"100%",
                    objectFit:"cover",
                  }}
                />


                <IconButton
                  onClick={previousImage}

                  sx={{
                    position:"absolute",
                    left:18,
                    top:"50%",
                    transform:"translateY(-50%)",
                    background:"rgba(255,255,255,.85)",
                    color:"#C86B83",
                  }}
                >
                  <ArrowBackIosNewIcon/>
                </IconButton>



                <IconButton
                  onClick={nextImage}

                  sx={{
                    position:"absolute",
                    right:18,
                    top:"50%",
                    transform:"translateY(-50%)",
                    background:"rgba(255,255,255,.85)",
                    color:"#C86B83",
                  }}
                >
                  <ArrowForwardIosIcon/>
                </IconButton>


              </Box>



              <Typography
                sx={{
                  color:"#351E27",
                  fontWeight:800,
                  fontSize:".85rem",
                }}
              >
                {activeImage+1} / {product.images.length}
              </Typography>



              <Stack
                direction="row"
                spacing={1}
              >

                {
                  product.images.map((image,index)=>(

                    <Box
                      key={image}

                      onClick={()=>
                        setActiveImage(index)
                      }

                      sx={{
                        width:60,
                        height:60,
                        borderRadius:2,
                        overflow:"hidden",
                        cursor:"pointer",

                        border:
                        activeImage===index
                        ?
                        "3px solid #C86B83"
                        :
                        "1px solid rgba(200,107,131,.2)",
                      }}
                    >

                      <CardMedia
                        component="img"
                        image={image}

                        sx={{
                          width:"100%",
                          height:"100%",
                          objectFit:"cover",
                        }}
                      />

                    </Box>

                  ))
                }

              </Stack>


            </Stack>

          </Grid>

          {/* PRODUCT DETAILS */}


          <Grid
            size={{ xs: 12, md: 6 }}
          >

            <Stack
              spacing={3}
              sx={{
                alignItems: {
                  xs: "center",
                  md: "flex-start",
                },
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >


              <Typography
                sx={{
                  color:"#C86B83",
                  fontWeight:900,
                  letterSpacing:2,
                  fontSize:".85rem",
                }}
              >
                THE BLOOMIFIER COLLECTION
              </Typography>



              <Typography
                sx={{
                  color:"#351E27",
                  fontWeight:950,

                  fontSize:{
                    xs:"2.3rem",
                    md:"3.5rem",
                  },

                  lineHeight:1.1,
                }}
              >
                {product.name}
              </Typography>



              <Typography
                sx={{
                  color:"#C86B83",
                  fontWeight:800,
                }}
              >
                {product.notes}
              </Typography>



              <Typography
                sx={{
                  color:"#6B555B",
                  lineHeight:1.9,
                  maxWidth:520,
                }}
              >
                {product.description}
              </Typography>




              {/* AROMA VARIANTS */}


              <Stack
                direction="row"
                spacing={2}
                useFlexGap
                sx={{
                  flexWrap: "wrap",
                  justifyContent: {
                    xs: "center",
                    md: "space-between",
                  },
                }}
              >

                {
                  products.map((item,index)=>(

                    <Chip
                      key={item.name}

                      label={item.name}

                      onClick={()=>
                        changeProduct(index)
                      }

                      sx={{
                        px:1,
                        py:2.2,
                        borderRadius:3,
                        fontWeight:800,

                        background:
                        activeProduct===index
                        ?
                        "#C86B83"
                        :
                        "#FFF8F3",

                        color:
                        activeProduct===index
                        ?
                        "#fff"
                        :
                        "#351E27",

                        border:
                        "1px solid rgba(200,107,131,.25)",
                      }}
                    />

                  ))
                }

              </Stack>





              {/* SETUP */}


              <Typography
                sx={{
                  color:"#351E27",
                  fontWeight:900,
                  fontSize:"1.1rem",
                }}
              >
                Choose your setup
              </Typography>



              <Grid
                container
                spacing={2}
                sx={{ width: "100%" }}
              >


                <Grid size={{ xs: 12, sm: 6 }}>

                  <Paper

                    elevation={0}

                    onClick={()=>
                      setPurchaseType("aroma")
                    }

                    sx={{

                      p:{
                        xs:2.5,
                        md:3,
                      },

                      borderRadius:4,

                      textAlign:"center",

                      cursor:"pointer",

                      background:
                      purchaseType==="aroma"
                      ?
                      "#F9E4EA"
                      :
                      "#FFF8F3",

                      border:
                      purchaseType==="aroma"
                      ?
                      "2px solid #C86B83"
                      :
                      "1px solid rgba(200,107,131,.18)",

                    }}

                  >

                    <Typography
                      sx={{
                        color:"#351E27",
                        fontWeight:900,
                      }}
                    >
                      Aroma Refill
                    </Typography>


                    <Typography
                      sx={{
                        color:"#C86B83",
                        fontWeight:950,
                        fontSize:"1.35rem",
                        mt:.5,
                      }}
                    >
                      ₹1999
                    </Typography>


                    <Typography
                      sx={{
                        color:"#6B555B",
                        fontSize:".82rem",
                        mt:.5,
                      }}
                    >
                      For existing Bloomifier homes
                    </Typography>


                  </Paper>


                </Grid>





                <Grid size={{ xs: 12, sm: 6 }}>

                  <Paper

                    elevation={0}

                    onClick={()=>
                      setPurchaseType("diffuser")
                    }

                    sx={{

                      p:{
                        xs:2.5,
                        md:3,
                      },

                      borderRadius:4,

                      textAlign:"center",

                      cursor:"pointer",

                      background:
                      purchaseType==="diffuser"
                      ?
                      "#F9E4EA"
                      :
                      "#FFF8F3",

                      border:
                      purchaseType==="diffuser"
                      ?
                      "2px solid #C86B83"
                      :
                      "1px solid rgba(200,107,131,.18)",

                    }}

                  >

                    <Typography
                      sx={{
                        color:"#351E27",
                        fontWeight:900,
                      }}
                    >
                      Add Diffuser
                    </Typography>


                    <Typography
                      sx={{
                        color:"#C86B83",
                        fontWeight:950,
                        fontSize:"1.35rem",
                        mt:.5,
                      }}
                    >
                      +₹500
                    </Typography>


                    <Typography
                      sx={{
                        color:"#6B555B",
                        fontSize:".82rem",
                        mt:.5,
                      }}
                    >
                      Start your first Bloomifier ritual
                    </Typography>


                  </Paper>


                </Grid>


              </Grid>





              {/* PROMISE */}


              <Paper
                elevation={0}

                sx={{
                  width:"100%",

                  p:2.5,

                  borderRadius:4,

                  background:"#FFF8F3",

                  border:
                  "1px solid rgba(200,107,131,.18)",
                }}
              >

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    alignItems: "center",
                  }}
                >

                  <CheckCircleIcon
                    sx={{
                      color:"#C86B83",
                      fontSize:34,
                    }}
                  />


                  <Box>

                    <Typography
                      sx={{
                        color:"#351E27",
                        fontWeight:950,
                      }}
                    >
                      30 Day Bloomifier Guarantee
                    </Typography>


                    <Typography
                      sx={{
                        color:"#6B555B",
                        fontSize:".9rem",
                      }}
                    >
                      Don't love it? Get your money back, no questions asked!
                    </Typography>


                  </Box>


                </Stack>


              </Paper>





              {/* BUY BUTTON */}


              <Button

                fullWidth

                variant="contained"

                sx={{
                  py:2,

                  borderRadius:10,

                  background:"#C86B83",

                  color:"#fff",

                  fontWeight:950,

                  fontSize:"1.15rem",

                  textTransform:"none",

                  boxShadow:
                  "0 18px 40px rgba(200,107,131,.35)",

                  "&:hover":{
                    background:"#AE526D",
                  },
                }}

              >
                Buy Now — ₹{price}

              </Button>





              {/* ASSURANCES */}
              <Stack
                direction="row"
                spacing={{ xs: 2, md: 4 }}
                sx={{
                  width: "100%",
                  flexGrow: 1,
                  flex: 1,
                  alignSelf: "stretch",
                  mx: 2,
                  px: 2,
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
              {[
                "✓ Secure Payment",
                "✓ Premium Quality",
                "✓ Fast Delivery",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    flex: 1,
                    color: "#6B555B",
                    fontWeight: 700,
                    fontSize: {
                      xs: "0.7rem",
                      md: "0.85rem",
                    },
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>


            </Stack>


          </Grid>


        </Grid>


      </Container>
      <StorySection />
      <FeelingSection />
      <FAQSection />
      <LoveSection />
      <FinalCTASection />

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


function FAQSection() {

  const faqs = [
    {
      question:"Do I need a diffuser to buy Bloomifier?",
      answer:
      "No. If you already own a Bloomifier diffuser, simply choose your favourite Aroma Refill. If this is your first time, select Add Diffuser and create your complete Bloomifier setup.",
    },

    {
      question:"What is included in my first Bloomifier setup?",
      answer:
      "Your first setup includes the Bloomifier diffuser along with your selected aroma experience. Everything you need to transform your space arrives together.",
    },

    {
      question:"How long does one Aroma Refill last?",
      answer:
      "Our aromas are designed for long-lasting everyday fragrance. The experience depends on your preferred intensity and room size, allowing you to create the atmosphere you love.",
    },

    {
      question:"Which Bloomifier aroma should I choose?",
      answer:
      "Choose Boozy Coffee for warmth and comfort, Eternal Rose for elegance and softness, or Midnight Chocolate for a rich and cozy atmosphere.",
    },

    {
      question:"Can I switch between different aromas?",
      answer:
      "Absolutely. Many Bloomifier customers keep multiple aromas and change them depending on their mood, season, or occasion.",
    },

    {
      question:"Where can I use Bloomifier?",
      answer:
      "Bloomifier is designed to elevate bedrooms, living rooms, workspaces, and any space where you want a beautiful signature scent.",
    },

    {
      question:"Will the fragrance be too strong?",
      answer:
      "Bloomifier is designed for a balanced experience - noticeable enough to transform your space while remaining comfortable for everyday living.",
    },

    {
      question:"Why choose Bloomifier over regular room fragrances?",
      answer:
      "Bloomifier combines beautiful design, premium aromas, and a refill system created for a long-lasting home fragrance experience.",
    },

    {
      question:"Can I gift Bloomifier?",
      answer:
      "Yes. Bloomifier makes a thoughtful gift for housewarmings, celebrations, and anyone who loves creating a beautiful home.",
    },

    {
      question:"How do I order more aromas later?",
      answer:
      "Simply return to the product page, select your preferred Aroma Refill, and checkout. You never need to purchase another diffuser.",
    },
  ];


  const [openIndex,setOpenIndex] =
  useState<number | null>(null);



  return (

    <Box
      sx={{
        background:"#FFF8F3",

        py:{
          xs:7,
          md:11,
        },
      }}
    >

      <Container maxWidth="md">


        <Stack
          spacing={2}
          sx={{
            mb: { xs: 2, md: 4 },
            alignItems: "center",
            textAlign: "center",
          }}
        >


          <Typography
            sx={{
              color:"#C86B83",
              fontWeight:950,
              letterSpacing:3,

              fontSize:{
                xs:"1.1rem",
                md:"1.35rem",
              },

              textTransform:"uppercase",
            }}
          >
            FAQs
          </Typography>



          <Typography
            sx={{
              color:"#351E27",
              fontWeight:950,

              fontSize:{
                xs:"2.1rem",
                md:"3.2rem",
              },

              lineHeight:1.15,
            }}
          >
            Everything you need to know
            <br/>
            before bringing Bloomifier home
          </Typography>



          <Typography
            sx={{
              color:"#6B555B",

              maxWidth:600,

              lineHeight:1.8,

              fontSize:{
                xs:".95rem",
                md:"1rem",
              },
            }}
          >
            From choosing your first aroma to keeping your home
            smelling incredible, we have answered everything you need.
          </Typography>


        </Stack>





        <Stack spacing={2}>


          {
            faqs.map((faq,index)=>{

              const open =
              openIndex===index;


              return (

                <Paper

                  key={faq.question}

                  elevation={0}

                  onClick={()=>{

                    setOpenIndex(
                      open
                      ?
                      null
                      :
                      index
                    );

                  }}


                  sx={{

                    p:{
                      xs:2.2,
                      md:3,
                    },

                    borderRadius:5,

                    cursor:"pointer",

                    background:
                    open
                    ?
                    "#F9E4EA"
                    :
                    "#FFF8F3",


                    border:
                    "1px solid rgba(200,107,131,.18)",


                    transition:
                    "all .3s ease",


                    "&:hover":{
                      boxShadow:
                      "0 12px 30px rgba(200,107,131,.12)",
                    },

                  }}

                >



                  <Box
                    sx={{
                      display:"flex",
                      flexDirection:"row",
                      alignItems:"center",
                      gap:2,
                    }}
                  >



                    <Typography
                      sx={{

                        flex:1,

                        color:"#351E27",

                        fontWeight:900,

                        fontSize:{
                          xs:".95rem",
                          md:"1.1rem",
                        },

                      }}
                    >
                      {faq.question}
                    </Typography>



                    <ExpandMoreIcon

                      sx={{

                        flexShrink:0,

                        color:"#C86B83",

                        fontSize:{
                          xs:30,
                          md:34,
                        },

                        background:"#FFF8F3",

                        borderRadius:"50%",

                        p:.4,


                        transition:
                        "transform .3s ease",


                        transform:
                        open
                        ?
                        "rotate(180deg)"
                        :
                        "rotate(0deg)",

                      }}

                    />


                  </Box>





                  <Collapse in={open}>


                    <Typography
                      sx={{

                        color:"#6B555B",

                        lineHeight:1.8,

                        mt:2,

                        fontSize:".95rem",

                      }}
                    >
                      {faq.answer}
                    </Typography>


                  </Collapse>



                </Paper>

              );

            })
          }


        </Stack>




        <Paper

          elevation={0}

          sx={{

            mt:5,

            p:3,

            borderRadius:5,

            textAlign:"center",

            background:"#F9E4EA",

            border:
            "1px solid rgba(200,107,131,.18)",

          }}

        >

          <Typography
            sx={{
              color:"#351E27",
              fontWeight:950,
              fontSize:"1.1rem",
            }}
          >
            Still have questions?
          </Typography>


          <Typography
            sx={{
              color:"#6B555B",
              mt:1,
            }}
          >
            We're here to help you create the perfect home atmosphere. So send us an E-Mail and we'll get back to you within 24 hours.
          </Typography>


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