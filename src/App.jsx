import { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import themeConfig from './theme/theme.js';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Gallery from './sections/Gallery.jsx';
import About from './sections/About.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Packages from './sections/Packages.jsx';
import ContactSection from './sections/ContactSection.jsx';
import Footer from './sections/Footer.jsx';
import { Box } from '@mui/material';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const activeTheme = useMemo(
    () => ({ ...themeConfig, palette: { ...themeConfig.palette, mode: darkMode ? 'dark' : 'light' } }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <Portfolio />
          <Gallery />
          <About />
          <Testimonials />
          <Packages />
          <ContactSection />
          <Footer />
        </Box>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
