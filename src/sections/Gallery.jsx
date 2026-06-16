import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

// இதய வடிவத்தை உருவாக்க தேவையான 30 போட்டோக்களின் லிஸ்ட்
const photos = [
  { src: "/prewedding1.jpg", gridX: 2, gridY: 1 },
  { src: "/prewedding2.jpg", gridX: 3, gridY: 1 },
  { src: "/wedding1.jpg", gridX: 5, gridY: 1 },
  { src: "/wedding2.jpg", gridX: 6, gridY: 1 },
  
  { src: "/prewedding11.jpg", gridX: 1, gridY: 2 },
  { src: "/wedding8.jpg", gridX: 4, gridY: 2 },
  { src: "/wedding17.jpg", gridX: 7, gridY: 2 },
  
  { src: "/wedding5.jpg", gridX: 1, gridY: 3 },
  { src: "/prewedding20.jpg", gridX: 7, gridY: 3 },
  
  { src: "/telungu9.jpg", gridX: 1, gridY: 4 },
  { src: "/wedding15.jpg", gridX: 7, gridY: 4 },
  
  { src: "/wedding13.jpg", gridX: 2, gridY: 5 },
  { src: "/wedding7.jpg", gridX: 6, gridY: 5 },
  
  { src: "/wedding5.jpg", gridX: 3, gridY: 6 },
  { src: "/wedding3.jpg", gridX: 5, gridY: 6 },
  
  { src: "/telungu20.jpg", gridX: 4, gridY: 7 },

  { src: "/telungu19.jpg", gridX: 2, gridY: 2 },
  { src: "/telungu14.jpg", gridX: 3, gridY: 2 },
  { src: "/telungu13.jpg", gridX: 5, gridY: 2 },
  { src: "/telungu12.jpg", gridX: 6, gridY: 2 },
  { src: "/telungu11.jpg", gridX: 2, gridY: 3 },
  { src: "/wedding16.jpg", gridX: 3, gridY: 3 },
  { src: "/telungu8.jpg", gridX: 4, gridY: 3 },
  { src: "/telungu2.jpg", gridX: 5, gridY: 3 },
  { src: "/wedding1.jpg", gridX: 6, gridY: 3 },
  { src: "/wedding2.jpg", gridX: 2, gridY: 4 },
  { src: "/telungu.jpg", gridX: 3, gridY: 4 },
  { src: "/wedding12.jpg", gridX: 4, gridY: 4 },
  { src: "/wedding5.jpg", gridX: 5, gridY: 4 },
  { src: "/prewedding4.jpg", gridX: 6, gridY: 4 },
  { src: "/telungu2.jpg", gridX: 3, gridY: 5 },
  { src: "/wedding18.jpg", gridX: 4, gridY: 5 },
  { src: "/wedding1.jpg", gridX: 5, gridY: 5 },
  { src: "/wedding2.jpg", gridX: 4, gridY: 6 },
];

export default function Gallery() {
  return (
    <Box
      id="gallery"
      sx={{
        py: 12,
        background: "#faf9f6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND ELEMENTS: மேட்சிங் சாஃப்ட் வாட்டர்கலர் க்ளோ */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(253, 164, 186, 0.2) 0%, rgba(250,249,246,0) 75%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Top Content */}
        <Box textAlign="center" mb={8}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 2 }}>
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
              Our Gallery
            </Typography>
            <Box sx={{ width: "25px", height: "1px", backgroundColor: "#B38F43" }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "2.4rem", md: "3.6rem" },
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              lineHeight: 1.25,
              background: "linear-gradient(135deg, #1A1A1A 30%, #B38F43 85%, #E11D48 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Stories Framed With Love
          </Typography>
        </Box>

        {/* ================= LAYOUT GRID: HEART IN CENTER, TEXT AROUND IT ================= */}
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          
          {/* 1. LEFT CONTENT: இதயத்திற்கு இடது புறம் உள்ள கன்டென்ட் */}
          <Grid item xs={12} md={3} order={{ xs: 2, md: 1 }}>
            <Box sx={{ textAlign: { xs: "center", md: "right" }, px: { md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  color: "#B38F43",
                  mb: 2,
                  fontWeight: 400
                }}
              >
                The Beginning
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  lineHeight: 1.9,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.95rem",
                }}
              >
                Every look, every smile, and every unspoken word. We capture the raw, 
                beautiful emotions of your pre-wedding chapters, weaving them into 
                a cinematic prologue of your forever love story.
              </Typography>
            </Box>
          </Grid>

          {/* 2. CENTER CONTENT: உங்களது இதயம் வடிவ போட்டோ கிரிட் */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: { xs: 0.8, sm: 1.2, md: 1.5 },
                maxWidth: "580px", // கன்டென்ட் நடுவில் அழகாக தெரிய சற்றே ஆப்டிமைஸ் செய்யப்பட்டுள்ளது
                mx: "auto",
              }}
            >
              {photos.map((photo, index) => (
                <Box
                  key={index}
                  sx={{
                    gridColumnStart: photo.gridX,
                    gridRowStart: photo.gridY,
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: { xs: "6px", md: "10px" },
                      overflow: "hidden",
                      boxShadow: "0 8px 20px rgba(179,143,67,0.06)",
                      aspectRatio: "1/1",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "scale(1.25)",
                        zIndex: 10,
                        boxShadow: "0 15px 30px rgba(225,29,72,0.25)",
                        border: "2px solid #FB7185"
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={photo.src}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* 3. RIGHT CONTENT: இதயத்திற்கு வலது புறம் உள்ள கன்டென்ட் */}
          <Grid item xs={12} md={3} order={{ xs: 3, md: 3 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  color: "#E11D48", // லைட் ரோஸ்/ரெட் போக்கஸ்
                  mb: 2,
                  fontWeight: 400
                }}
              >
                The Celebration
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  lineHeight: 1.9,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.95rem",
                }}
              >
                From grand traditional rituals to blissful candid glances, we preserve 
                the laughter, joy, and tears of your big day. Every frame is safely archived 
                so you can relive the magic for generations.
              </Typography>
            </Box>
          </Grid>

        </Grid>

        {/* Bottom Editorial Quote */}
        <Box textAlign="center" mt={10}>
          <Typography
            sx={{
              color: "#888",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.9,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.92rem",
              fontStyle: "italic"
            }}
          >
            "Photography is the art of making memories tangible." — Crafting your luxury 
            wedding mosaic with precise attention to details and timeless elegance.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}