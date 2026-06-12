import { Container, Grid, Box, Typography, Paper, Chip, Stack } from '@mui/material';
import AnimatedSection from '../components/AnimatedSection.jsx';

const highlights = [
  'Fine art ceremony storytelling',
  'Dedicated planning and scene design',
  'Rich portrait lighting with natural mood',
  'Selective albums and storyboard guides',
];

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedSection>
              <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', boxShadow: 8 }}>
                <Box sx={{ height: { xs: 420, md: 520 }, backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <Paper sx={{ position: 'absolute', bottom: 24, left: 24, p: 3, backgroundColor: 'rgba(255,255,255,0.9)', maxWidth: 320 }} elevation={0}>
                  <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 1.8, mb: 1 }}>
                    The Vision
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Each wedding film is shaped with an editorial eye and a graceful sense of presence.
                  </Typography>
                </Paper>
              </Box>
            </AnimatedSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.15}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 1 }}>
                About Alaiya Studio
              </Typography>
              <Typography variant="h2" sx={{ mb: 3 }}>
                A Chennai studio for couples who want imagery that feels cherished and beautifully composed.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                We photograph weddings with a calm rhythm—soft portraits, temple rituals, family emotion, and dance-filled receptions. Our approach is quietly luxurious, with every frame designed to feel luminous and authentic.
              </Typography>
              <Stack spacing={2}>
                {highlights.map((item) => (
                  <Chip key={item} label={item} variant="outlined" sx={{ borderColor: 'divider', color: 'text.primary', fontWeight: 600 }} />
                ))}
              </Stack>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
