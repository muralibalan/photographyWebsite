import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Switch, useScrollTrigger, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const navItems = ['Portfolio', 'Gallery', 'About', 'Testimonials', 'Packages', 'Contact'];

export default function Navbar({ darkMode, setDarkMode }) {
  const [elevated, setElevated] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variant = {
    hover: { y: -2, transition: { duration: 0.25 } },
  };

  return (
    <AppBar
      position="sticky"
      elevation={elevated ? 6 : 0}
      sx={{
        backgroundColor: elevated ? 'background.paper' : 'transparent',
        color: 'text.primary',
        borderBottom: elevated ? '1px solid rgba(0,0,0,0.06)' : 'transparent',
        backdropFilter: 'blur(16px)',
        transition: 'background-color 0.4s ease, border 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 2, px: { xs: 2, md: 6 } }}>
        <Box>
          <Button href="#hero" color="inherit" sx={{ fontWeight: 700, letterSpacing: 1.4 }}>
            Alaiya Studio
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
          {navItems.map((item) => (
            <motion.div key={item} whileHover="hover" variants={variant}>
              <Button href={`#${item.toLowerCase()}`} color="inherit" sx={{ fontWeight: 600 }}>
                {item}
              </Button>
            </motion.div>
          ))}
          <IconButton onClick={() => setDarkMode((prev) => !prev)} sx={{ ml: 1 }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
