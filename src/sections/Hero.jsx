import { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Fixed Image Paths (Removed 'public' prefix for standard React/Vite configurations)
const slides = [
  { image: "/pexels-deepak-joshy-922912561-19982600.jpg" },
  { image: "/pexels-amodita-s-frame-485464413-33078539.jpg" },
  { image: "/pexels-camera-treasure-928922-17738307.jpg" },
  { image: "/pexels-tr-n-long-3093985-5984218.jpg" },
  { image: "/pexels-camera-treasure-928922-17704229.jpg" },
];

export default function Hero() {
  const ref = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <Box 
      id="hero" 
      ref={ref} 
      sx={{ 
        position: 'relative', 
        minHeight: '100vh', 
        overflow: 'hidden', 
        bgcolor: '#0B0806' 
      }}
    >
      {/* Background Images Slider */}
      <AnimatePresence initial={false} mode="popLayout">
        <Box
          component={motion.div}
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }} // Soft luxury cross-fade transition
          style={{ scale, y }}
          sx={{ 
            position: 'absolute', 
            inset: 0, 
            zIndex: 1,
            width: '100%',
            height: '100%'
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slides[currentImage].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Box>
      </AnimatePresence>

      {/* Premium Dark Gradient Overlay (Fixed Visibility for Better Text Contrast) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Content Container (Bottom-Center Alignment) */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 3, 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'flex-end', 
          alignItems: 'center',      
          pb: { xs: 8, md: 10 },      
          pt: { xs: 12, md: 15 }
        }}
      >
        <Box 
          sx={{ 
            width: '100%',
            maxWidth: 1000, 
            textAlign: 'center', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Main Title */}
            <Typography 
              variant="h1" 
              sx={{ 
                color: '#FCF6EE', 
                mb: 1.5, 
                fontWeight: 300, 
                fontSize: { xs: '2.5rem', sm: '4rem', md: '64px' }, 
                fontFamily: '"Playfair Display", serif',
                textTransform: 'none',
                lineHeight: 1.2,
              }}
            >
              Stories from Alaiya Watts
            </Typography>

            {/* Subtitle */}
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#FCF6EE', 
                letterSpacing: '6px', 
                display: 'block',
                fontSize: { xs: '0.7rem', sm: '0.85rem', md: '14px' },
                fontWeight: 400,
                fontFamily: '"Montserrat", "Helvetica", sans-serif',
                opacity: 0.8
              }}
            >
              Premium Wedding Photographer
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}