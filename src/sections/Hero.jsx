import { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const slides = [
  { image: "/engagement.jpeg" },
  { image: "/haldi.jpg" },
  { image: "/marrige.jpg" },
  { image: "/couple.jpg" },
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
    <Box id="hero" ref={ref} sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', bgcolor: '#0B0806' }}>
      
      {/* Background Images Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
          style={{ position: 'absolute', inset: 0, scale, y, zIndex: 1 }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slides[currentImage].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // filter-ல் இருந்த blur நீக்கப்பட்டு, எழுத்துக்கள் தெரிய லேசான பிரைட்னஸ் மட்டும் வைக்கப்பட்டுள்ளது
              filter: 'brightness(0.8)', 
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Premium Dark Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11,8,6,0.1) 0%, rgba(11,8,6,0.85) 90%)',
          zIndex: 2,
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
          pb: { xs: 6, md: 8 },       
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
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* மெயின் பெரிய டைட்டில் */}
            <Typography 
              variant="h1" 
              sx={{ 
                color: '#FCF6EE', 
                mb: 0.5, 
                fontWeight: 300, 
                fontSize: { xs: '2.2rem', sm: '3.5rem', md: '60px' }, 
                 fontFamily: "'Cormorant Garamond', serif",
                textTransform: 'none',
                lineHeight:2,
              }}
            >
              Stories from Alaiya Watts
            </Typography>

            {/* சப்-டைட்டில் */}
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#FCF6EE', 
                letterSpacing: '8px', 
                display: 'block',
                fontSize: { xs: '0.65rem', sm: '0.8rem', md: '15px' },
                fontWeight: 500,
                fontFamily: '"Montserrat", "Helvetica", sans-serif',
                opacity: 0.95
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