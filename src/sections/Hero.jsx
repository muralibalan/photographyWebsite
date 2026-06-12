import { useRef } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <Box id="hero" ref={ref} sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Box
        component={motion.div}
        style={{ scale, y }}
        sx={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.65)',
        }}
      />
      <Box
        sx={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(20,16,13,0.12) 0%, rgba(11,8,6,0.86) 80%)',
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ maxWidth: 720, py: { xs: 12, md: 18 } }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 2 }}>
              Chennai Wedding Narrative
            </Typography>
            <Typography variant="h1" sx={{ color: '#FCF6EE', mb: 3, maxWidth: 680 }}>
              Cinematic wedding imagery that feels tender, luminous, and truly yours.
            </Typography>
            <Typography variant="body1" sx={{ color: '#E8DAC9', mb: 5, maxWidth: 520 }}>
              We craft rich, intimate frames from rituals, portraits, and candid moments—so every memory arrives with warmth and quiet luxury.
            </Typography>
          </motion.div>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button href="#contact" variant="contained" color="secondary" size="large">
              Book a consultation
            </Button>
            <Button href="#portfolio" variant="outlined" color="inherit" size="large" sx={{ borderColor: 'rgba(255,255,255,0.75)' }}>
              View portfolio
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
