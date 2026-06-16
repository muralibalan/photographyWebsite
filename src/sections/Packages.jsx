import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const packages = [
  { 
    title: "Signature Wedding", 
    price: "₹1,45,000", 
    features: ["Full ceremony coverage", "Portrait session", "Reception storytelling", "Digital gallery edit"],
    borderColor: "#B38F43" 
  },
  { 
    title: "Ceremony & Rituals", 
    price: "₹95,000", 
    features: ["Temple coverage", "Family portraits", "Candid moments", "Luxury slideshow"], 
    highlight: true,
    borderColor: "#B38F43" 
  },
  { 
    title: "Portrait Edit", 
    price: "₹48,000", 
    features: ["Couple portraits", "Fine art retouching", "Editorial composition", "Styling guidance"],
    borderColor: "#B38F43" 
  },
];

export default function Packages() {
  return (
    <Box id="packages" sx={{ py: { xs: 12, md: 16 }, backgroundColor: "#FAF9F6", position: "relative", overflow: "hidden" }}>
      
      {/* ================= BACKGROUND BLUR EFFECTS (NO PINK - ONLY LUXURY GOLD & NEUTRAL) ================= */}
      {/* இடது பக்கம் - பிங்க் நீக்கப்பட்டு மென்மையான நியூட்ரல் சாம்பல் குளோ சேர்க்கப்பட்டுள்ளது */}
      <Box sx={{ position: "absolute", top: "25%", left: "15%", width: "400px", height: "400px", background: "rgba(179, 143, 67, 0.08)", filter: "blur(100px)", borderRadius: "50%" }} />
      {/* வலது பக்கம் - பிரீமியம் சாஃப்ட் கோல்டன் குளோ */}
      <Box sx={{ position: "absolute", bottom: "25%", right: "15%", width: "400px", height: "400px", background: "rgba(179,143,67,0.15)", filter: "blur(100px)", borderRadius: "50%" }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* ================= TITLE & CONTENT SECTION ================= */}
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
              Investment Plans
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
            Transparent Pricing Built for Intimate & Timeless Memories
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1rem",
              color: "#555555",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            No hidden charges. Choose a handcrafted collection that perfectly matches your wedding storytelling and portrait desires.
          </Typography>
        </Box>

        {/* ================= PACKAGES GRID ================= */}
        <Grid container spacing={4} alignItems="center">
          {packages.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <motion.div 
                whileHover={{ y: -12, scale: 1.02, rotateY: index === 0 ? -3 : index === 2 ? 3 : 0 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Box sx={{
                  p: 5, 
                  borderRadius: "32px",
                  background: "rgba(255, 255, 255, 0.75)", 
                  backdropFilter: "blur(20px)",
                  border: `2px solid ${item.borderColor}`, 
                  boxShadow: item.highlight ? "0 25px 50px rgba(179,143,67,0.15)" : "0 20px 40px rgba(0,0,0,0.04)", // ஹோவர் ஷேடோவும் கோல்டனாக மாற்றப்பட்டது
                  transform: item.highlight ? { md: "scale(1.04)" } : "none", 
                }}>
                  
                  <Typography 
                    sx={{ 
                      fontFamily: "'Playfair Display', serif", 
                      fontSize: "1.7rem", 
                      color: item.borderColor, 
                      mb: 1, 
                      fontWeight: 600 
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* விலை மதிப்பு */}
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2.4rem", fontWeight: 300, color: "#1A1A1A", mb: 4 }}>
                    {item.price}
                  </Typography>

                  {/* விவரங்கள் பட்டியல் */}
                  <Stack spacing={2} sx={{ mb: 4, minHeight: "150px" }}>
                    {item.features.map((f) => (
                      <Typography key={f} sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", color: "#4A4A4A", display: "flex", gap: 1 }}>
                        <span style={{ color: item.borderColor }}>✦</span> {f}
                      </Typography>
                    ))}
                  </Stack>

                  {/* பட்டன் டிசைன் */}
                  <Button 
                    href="#contact" 
                    variant={item.highlight ? "contained" : "outlined"} 
                    fullWidth 
                    sx={{ 
                      borderRadius: "50px", 
                      py: 1.5, 
                      backgroundColor: item.highlight ? "#E11D48" : "transparent", 
                      borderColor: item.borderColor, 
                      color: item.highlight ? "#FFF" : item.borderColor, 
                      fontWeight: 600,
                      "&:hover": { 
                        backgroundColor: item.highlight ? "#1A1A1A" : item.borderColor, 
                        color: "#FFF",
                        borderColor: item.borderColor
                      } 
                    }}
                  >
                    Enquire Collection
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}