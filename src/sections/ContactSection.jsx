import { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Link, Paper } from '@mui/material';
import ContactForm from '../components/ContactForm.jsx'; 

export default function LuxuryBrandingSection() {
  const [isContactPageOpen, setIsContactPageOpen] = useState(false);

  // 1. HERO PAGE component
  if (!isContactPageOpen) {
    return (
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          backgroundImage: 'url("/contact.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          py: { xs: 8, md: 0 } 
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 100%)', zIndex: 1 }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: { xs: 3, sm: 4, md: 6 } }}>
          <Stack spacing={{ xs: 4, md: 5 }} alignItems="center" sx={{ textAlign: 'center' }}>
            
            {/* FIXED LOGO SECTION FOR MOBILE */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <Box
                sx={{
                  width: { xs: '55px', md: '70px' },
                  height: { xs: '55px', md: '70px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: { xs: '12px', md: '16px' },
                  border: '1.5px solid #B38F43',
                  transform: 'rotate(45deg)',
                  // Added to prevent distortion during rendering transitions
                  flexShrink: 0, 
                  boxSizing: 'border-box'
                }}
              >
                <Typography 
                  sx={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontWeight: 700, 
                    fontSize: { xs: '1.1rem', md: '1.4rem' }, 
                    color: '#B38F43', 
                    transform: 'rotate(-45deg)',
                    lineHeight: 1,
                    textAlign: 'center'
                  }}
                >
                  AS
                </Typography>
              </Box>
              
              <Typography 
                sx={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: { xs: '1.1rem', md: '1.4rem' }, 
                  letterSpacing: 3, 
                  color: '#FFFFFF', 
                  mt: { xs: 3, md: 4 },
                  whiteSpace: 'nowrap' // Mobile-il unga brand name double line break aahama thadukkum
                }}
              >
                Alaiya <span style={{ color: '#B38F43', fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', fontWeight: 600 }}>STUDIO</span>
              </Typography>
            </Box>

            <Typography sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4.8rem' }, fontFamily: "'Playfair Display', serif", fontWeight: 300, color: '#FFFFFF', lineHeight: { xs: 1.25, md: 1.15 }, maxWidth: '950px' }}>
              Capturing Honest Moments & <br style={{ display: { xs: 'none', sm: 'inline' } }} />
              <span style={{ color: '#B38F43', fontStyle: 'italic' }}>Timeless</span> Love Stories
            </Typography>

            <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: { xs: '0.85rem', md: '1.1rem' }, color: 'rgba(255, 255, 255, 0.75)', maxWidth: '620px', lineHeight: 1.7 }}>
              Premium wedding photography and cinematic films crafted for intimate ceremonies and beautiful souls across India.
            </Typography>

            <Button
              onClick={() => setIsContactPageOpen(true)}
              variant="contained"
              sx={{
                borderRadius: '50px',
                px: { xs: 5, md: 6 },
                py: { xs: 1.8, md: 2.2 },
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                backgroundColor: '#B38F43',
                color: '#FFFFFF',
                '&:hover': { backgroundColor: '#B38F43' },
              }}
            >
              Let's Connect
            </Button>

          </Stack>
        </Container>
      </Box>
    );
  }

  // 2. CONTACT DETAILS PAGE component
  return (
    <Box
      sx={{ 
        minHeight: '100vh', 
        py: { xs: 6, sm: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FAF9F6'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 6 } }}>
        
        <Button 
          onClick={() => setIsContactPageOpen(false)}
          sx={{ mb: { xs: 4, md: 6 }, color: '#1A1A1A', fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', letterSpacing: 1 }}
        >
          &#8592; Back to Gallery
        </Button>

        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="start">
          
          <Grid item xs={12} md={5}>
            <Box sx={{ pr: { md: 4 } }}>
              
              {/* CONTACT PAGE: FIXED LOGO ROW FOR MOBILE */}
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: { xs: 3, md: 4 } }}>
                <Box 
                  sx={{ 
                    width: { xs: '38px', md: '45px' }, 
                    height: { xs: '38px', md: '45px' }, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: { xs: '6px', md: '10px' }, 
                    border: '1.5px solid #B38F43', 
                    transform: 'rotate(45deg)', 
                    backgroundColor: '#1A1A1A',
                    flexShrink: 0
                  }}
                >
                  <Typography 
                    sx={{ 
                      fontFamily: "'Playfair Display', serif", 
                      fontWeight: 700, 
                      fontSize: { xs: '0.75rem', md: '0.9rem' }, 
                      color: '#B38F43', 
                      transform: 'rotate(-45deg)',
                      lineHeight: 1
                    }}
                  >
                    AS
                  </Typography>
                </Box>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '1.1rem', md: '1.2rem' }, letterSpacing: 2, color: '#1A1A1A', fontWeight: 600 }}>
                  Alaiya Studio
                </Typography>
              </Stack>

              <Typography sx={{ fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3.2rem' }, fontFamily: "'Playfair Display', serif", fontWeight: 300, color: '#1A1A1A', lineHeight: 1.25, mb: 3 }}>
                Let’s co-create a gallery that feels <span style={{ color: '#B38F43', fontStyle: 'italic' }}>timeless</span>.
              </Typography>

              <Typography sx={{ color: '#555555', fontFamily: "'Montserrat', sans-serif", fontSize: { xs: '0.9rem', md: '0.95rem' }, lineHeight: 1.7, mb: { xs: 4, md: 5 } }}>
                We would love to hear your story. Fill out our inquiry form, or reach out directly via official contact lines.
              </Typography>

              <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: '20px', background: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(179, 143, 67, 0.2)' }} elevation={0}>
                <Stack spacing={2.5}>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 600, color: '#1A1A1A', borderBottom: '1px solid rgba(0,0,0,0.06)', pb: 1 }}>Official Desk</Typography>
                  
                  <Box>
                    <Typography sx={{ color: '#B38F43', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>Phone Inquiry</Typography>
                    <Link href="tel:+919876543210" color="inherit" sx={{ textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 500 }}>+91 98765 43210</Link>
                  </Box>

                  <Box>
                    <Typography sx={{ color: '#B38F43', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>Email Studio</Typography>
                    <Link href="mailto:hello@alaiyastudio.com" color="inherit" sx={{ textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 500 }}>hello@alaiyastudio.com</Link>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ p: { xs: 3, sm: 4, md: 6 }, backgroundColor: '#FFFFFF', borderRadius: { xs: '24px', md: '32px' }, border: '1px solid rgba(179, 143, 67, 0.1)' }}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '1.3rem', md: '1.6rem' }, fontWeight: 500, mb: { xs: 3, md: 4 }, color: '#1A1A1A' }}>
                Share Your Wedding Details
              </Typography>
              <ContactForm />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}