import { Container, Grid, Box, Typography } from "@mui/material";
import StatCounter from "../components/StatCounter.jsx";

// 5 பிரீமியம் டெஸ்டிமோனியல் கார்டுகளுக்கான தரவு (5 Cards Data)
const premiumTestimonials = [
  {
    id: 1,
    coupleName: "Rahul & Priya",
    review: "“Alaiya Studio made our wedding look like a Bollywood movie! Every single frame captured the true emotions beautifully.”",
    backgroundImage: "/testimonial1.jpg", 
  },
  {
    id: 2,
    coupleName: "Vikram & Ananya",
    review: "“The candid photography was top-notch. They didn't just take photos, they beautifully preserved our lifetime memories.”",
    backgroundImage: "/testimonial2.jpg", 
  },
  {
    id: 3,
    coupleName: "Arjun & Sneha",
    review: "“Very professional and extremely creative. The light theme album they designed for us is absolutely elegant!”",
    backgroundImage: "/Christain-wedding1.jpg", 
  },
  {
    id: 4,
    coupleName: "Karthik & Divya",
    review: "“Their patience and dedication are amazing. They captured our traditional rituals with perfection and grace.”",
    backgroundImage: "/telungu2.jpg", 
  },
  {
    id: 5,
    coupleName: "Sanjay & Meera",
    review: "“The pre-wedding shoot experience was so comfortable and fun. The cinematic output exceeded our expectations!”",
    backgroundImage: "/christianpre17.jpg", 
  },
];

export default function Testimonials() {
  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "#FAF9F6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ================= BACKGROUND EFFECTS (NO PINK - ONLY LUXURY GOLD) ================= */}
      {/* வலது மேல் மூலை - கோல்டன் குளோ */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(243, 230, 211, 0.6) 0%, rgba(250,249,246,0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      {/* இடது கீழ் மூலை - பிங்க் நீக்கப்பட்டு மென்மையான சாஃப்ட் கோல்டன் குளோ சேர்க்கப்பட்டுள்ளது */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(179, 143, 67, 0.12) 0%, rgba(250,249,246,0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* ================= TOP CONTENT SECTION ================= */}
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
              Trusted by Beautiful Couples
            </Typography>
            <Box sx={{ width: "25px", height: "1px", backgroundColor: "#B38F43" }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "2.4rem", md: "3.6rem" },
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              lineHeight: 1.25,
              maxWidth: 750,
              mx: "auto",
              mb: 3,
              background: "linear-gradient(135deg, #1A1A1A 30%, #B38F43 80%, #E11D48 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Celebration Portraits and Ceremony Galleries Captured with Infinite Care
          </Typography>
        </Box>

        {/* ================= 5 தம்பதிகள் போட்டோ ரிவியூ கார்டுகள் (3 + 2 Layout) ================= */}
        <Grid container spacing={4} justifyContent="center">
          {premiumTestimonials.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box
                sx={{
                  position: "relative",
                  height: "420px", 
                  borderRadius: "28px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    transform: "translateY(-10px)", 
                    boxShadow: "0 30px 60px rgba(179,143,67,0.15)", // ஹோவர் குளோ எஃபெக்ட்டும் பிங்க்கிலிருந்து கோல்டனாக மாற்றப்பட்டது
                    "& .couple-bg": {
                      transform: "scale(1.06)", 
                    },
                  },
                }}
              >
                {/* தம்பதிகளின் பின்னணி புகைப்படம் */}
                <Box
                  className="couple-bg"
                  component="img"
                  src={item.backgroundImage} 
                  alt={item.coupleName}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                />

                {/* cinemaடிக் டார்க் கிரேடியன்ட் ஓவர்லே */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 4,
                  }}
                >
                  {/* கப்பிள்ஸ் சொன்ன ரிவியூ கன்டென்ட் */}
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.95rem",
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      mb: 2,
                      opacity: 0.95,
                      textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                    }}
                  >
                    {item.review}
                  </Typography>

                  {/* தம்பதிகளின் பெயர் */}
                  <Typography
                    sx={{
                      color: "#E11D48", 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      letterSpacing: 1,
                      textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                    }}
                  >
                    {item.coupleName}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ================= STAT COUNTER SECTION ================= */}
        <Box sx={{ mt: { xs: 12, md: 16 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <StatCounter value={135} label="Weddings Photographed" />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <StatCounter value={220} label="Happy Couples" />
            </Grid>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <StatCounter value={12} label="Years of Studio Craft" />
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}