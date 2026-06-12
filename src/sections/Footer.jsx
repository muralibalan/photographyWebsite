import { Box, Container, Typography, Stack, Link } from '@mui/material';

const links = ['Portfolio', 'Gallery', 'About', 'Testimonials', 'Packages', 'Contact'];
const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: 'text.primary', color: '#fff', py: 8 }}>
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={3}>
          <Box>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 1, fontWeight: 700 }}>
              Alaiya Studio
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 400 }}>
              Cinematic wedding photography for couples who cherish warm, authentic storytelling.
            </Typography>
          </Box>
          <Stack direction="row" spacing={3}>
            {links.map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} underline="none" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                {item}
              </Link>
            ))}
          </Stack>
          <Stack direction="row" spacing={2}>
            {socials.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" underline="none" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                {social.label}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 5, color: 'rgba(255,255,255,0.6)' }}>
          © 2026 Alaiya Studio. Crafted for cinematic South Indian wedding stories.
        </Typography>
      </Container>
    </Box>
  );
}
