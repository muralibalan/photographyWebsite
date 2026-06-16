import { Box, Container, Typography, Stack, Link } from '@mui/material';

const links = ['Portfolio', 'Gallery', 'About', 'Testimonials', 'Packages', 'Contact'];
const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
];

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#1A1A1A', // Dark premium luxury background
        color: '#fff', 
        py: { xs: 6, md: 8 }, // Mobile-la extra breathing space padding
        borderTop: '1px solid rgba(179, 143, 67, 0.2)' // Subtle gold border
      }}
    >
      <Container maxWidth="lg">
        {/* Main layout stacks vertically on mobile, horizontally on desktop */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={{ xs: 5, md: 3 }} // Mobile-la components naduvula nalla gap
          sx={{ textAlign: { xs: 'center', md: 'left' } }} // Mobile-la text automatic-aa center aagum
        >
          {/* Brand Info */}
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: "'Playfair Display', serif", 
                color: '#B38F43', // Brand Signature Gold Color
                mb: 1, 
                fontWeight: 700,
                letterSpacing: 1
              }}
            >
              Alaiya Studio
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontFamily: "'Montserrat', sans-serif",
                color: 'rgba(255,255,255,0.7)', 
                maxWidth: 400,
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                lineHeight: 1.6
              }}
            >
              Cinematic wedding photography for couples who cherish warm, authentic storytelling.
            </Typography>
          </Box>

          {/* Navigation Links - Wrap dynamically on mobile or stack */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} // Mobile-la column-avum, tablets-la row-avum maarum
            spacing={{ xs: 2.5, sm: 3 }} 
            alignItems="center"
          >
            {links.map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                underline="none" 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.8)',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#B38F43' } // Gold hover effect
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>

          {/* Social Links */}
          <Stack direction="row" spacing={3.5} alignItems="center">
            {socials.map((social) => (
              <Link 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                underline="none" 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: 0.5,
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#B38F43' }
                }}
              >
                {social.label}
              </Link>
            ))}
          </Stack>
        </Stack>

        {/* Copyright Section */}
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            textAlign: 'center', 
            mt: { xs: 6, md: 7 }, 
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: 0.5
          }}
        >
          © 2026 Alaiya Studio. Crafted for cinematic South Indian wedding stories.
        </Typography>
      </Container>
    </Box>
  );
}