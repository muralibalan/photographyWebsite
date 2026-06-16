import { useEffect, useState } from "react";
import { Container, Grid, Box, Typography, Chip, Stack } from "@mui/material";

// உங்களுடைய போட்டோகிராபி ஹைலைட்ஸ்
const highlights = [
  "Wedding Photography",
  "Pre-Wedding Shoots",
  "Candid Moments",
  "Traditional Rituals",
  "Reception Coverage",
  "Luxury Albums",
];

export default function About() {
  const [showText, setShowText] = useState(false);

  // வீடியோ லூப் டைமிங்கிற்கு ஏற்ப டெக்ஸ்ட் அனிமேஷன்
  useEffect(() => {
    const timer = setInterval(() => {
      setShowText((prev) => !prev);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#FAF9F6", // பிரீமியம் மேகசின் ஆஃப்-ஒயிட் பேக்கிரவுண்ட்
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND ELEMENTS: சாஃப்ட் பாஸ்டல் வாட்டர்கலர் க்ளோ */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(243, 230, 211, 0.7) 0%, rgba(250,249,246,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(253, 224, 212, 0.6) 0%, rgba(250,249,246,0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* ================= TOP SECTION: TITLE & SUBTITLE (CENTER ALIGNED LIKE SCREENSHOT) ================= */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 2.5 }}>
            <Box sx={{ width: "25px", height: "1px", backgroundColor: "#B38F43" }} />
            <Typography
              sx={{
                color: "#B38F43",
                letterSpacing: 4,
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
              }}
            >
              About Alaiya Photography
            </Typography>
            <Box sx={{ width: "25px", height: "1px", backgroundColor: "#B38F43" }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "2.4rem", md: "3.6rem" },
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              lineHeight: 1.25,
              maxWidth: 850,
              mx: "auto",
              background: "linear-gradient(135deg, #1A1A1A 20%, #B38F43 75%, #E11D48 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Preserving Love Stories Through Timeless Photography
          </Typography>
        </Box>

        {/* ================= CONTENT SECTION: VIDEO & TEXTS ================= */}
        <Grid container spacing={{ xs: 6, md: 12 }} alignItems="center">
          
          {/* LEFT SIDE: வீடியோ கார்டு */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "32px",
                p: "4px",
                background: "linear-gradient(135deg, rgba(179,143,67,0.4) 0%, rgba(253,164,186,0.3) 100%)",
                boxShadow: "0 30px 70px rgba(179, 143, 67, 0.08), 0 15px 40px rgba(0,0,0,0.03)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  background: "linear-gradient(135deg, rgba(179,143,67,0.8) 0%, rgba(253,164,186,0.7) 100%)",
                  boxShadow: "0 40px 90px rgba(179, 143, 67, 0.18), 0 20px 50px rgba(253,164,186,0.1)",
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "28px",
                  overflow: "hidden",
                  backgroundColor: "#000",
                }}
              >
                {/* சினிமாட்டிக் பின்னணி வீடியோ */}
                <Box
                  component="video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/video/3127074-hd_1920_1080_24fps.mp4"
                  sx={{
                    width: "100%",
                    height: { xs: 500, md: 600 }, // டைட்டில் மேலே சென்றதால் உயரம் 600ஆகக் குறைக்கப்பட்டுள்ளது (Balanced Look)
                    objectFit: "cover",
                    display: "block",
                    opacity: 0.85,
                  }}
                />

                {/* வீடியோவின் மையப்பகுதியில் இருக்கும் டெக்ஸ்ட் லேயர் */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)",
                    pointerEvents: "none",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: { xs: 1.5, md: 2 },
                      transition: "all 2.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      opacity: showText ? 1 : 0,
                      transform: showText ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: { xs: "2.8rem", md: "4.8rem" },
                        color: "#FFFFFF",
                        letterSpacing: "6px",
                        fontWeight: 200,
                        textTransform: "uppercase",
                        textShadow: "0px 10px 30px rgba(0,0,0,0.4)",
                      }}
                    >
                      Alaiya
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2.5rem" },
                        color: "#B38F43",
                        mx: 0.5,
                        textShadow: "0px 0px 10px rgba(179,143,67,0.6)",
                      }}
                    >
                      •
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: { xs: "0.9rem", md: "1.3rem" },
                        color: "rgba(255, 255, 255, 0.9)",
                        letterSpacing: "8px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        textShadow: "0px 5px 20px rgba(0,0,0,0.3)",
                        borderBottom: "2px solid #B38F43",
                        pb: 0.5,
                      }}
                    >
                      Studio
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SIDE: எடிட்டோரியல் டிஸ்கிரிப்ஷன் & சிப்ஸ் (இது லெஃப்ட்-அலைனில் அழகாக இருக்கும்) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              
              {/* சாஃப்ட் ஹைலைட் பாக்ஸ் */}
              <Box 
                sx={{ 
                  background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(243,230,211,0.2) 100%)",
                  borderLeft: "3px solid #B38F43", 
                  borderRadius: "0px 20px 20px 0px",
                  p: 3, 
                  mb: 4,
                  boxShadow: "0 10px 30px rgba(179,143,67,0.03)",
                }}
              >
                <Typography 
                  sx={{ 
                    color: "#4A4A4A", 
                    lineHeight: 1.95, 
                    fontSize: "1.05rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400
                  }}
                >
                  Every wedding is a story filled with emotions, traditions, and unforgettable moments. 
                  We believe photography is more than images — it is the art of preserving memories 
                  that will be cherished forever.
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#666666",
                  lineHeight: 1.9,
                  mb: 5,
                  fontSize: "0.98rem",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                From intimate pre-wedding sessions to grand wedding celebrations, our approach focuses 
                on natural emotions, authentic storytelling, and elegant compositions. Every frame is 
                carefully crafted to feel cinematic and deeply personal.
              </Typography>

              {/* CHIPS SECTION */}
              <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={1.5}>
                {highlights.map((item, index) => (
                  <Chip
                    key={item}
                    label={item}
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                      borderColor: index % 2 === 0 ? "rgba(179, 143, 67, 0.3)" : "rgba(253, 164, 186, 0.6)",
                      color: "#2A2A2A",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: 0.3,
                      px: 1.5,
                      py: 2.2,
                      backgroundColor: index % 2 === 0 ? "rgba(243,230,211,0.2)" : "rgba(253,164,186,0.05)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: index % 2 === 0 ? "#B38F43" : "#FB7185",
                        color: "#fff",
                        borderColor: index % 2 === 0 ? "#B38F43" : "#FB7185",
                        transform: "translateY(-3px) scale(1.03)",
                        boxShadow: index % 2 === 0 ? "0 10px 20px rgba(179,143,67,0.15)" : "0 10px 20px rgba(253,164,186,0.2)",
                      },
                    }}
                  />
                ))}
              </Stack>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}