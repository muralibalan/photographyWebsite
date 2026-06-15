import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const leftNavItems = ['Home', 'About', 'Portfolio'];
const rightNavItems = ['Gallery', 'Packages', 'Contact'];

export default function Navbar({ darkMode, setDarkMode }) {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 20) {
        setElevated(true);
      } else {
        setElevated(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variant = {
    hover: { y: -1, opacity: 0.8, transition: { duration: 0.1 } },
  };

  const navButtonStyle = {
    fontWeight: 400,
    fontSize: 13,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: elevated 
      ? (darkMode ? '#FCF6EE' : '#14100D') 
      : '#ffffff', 
    px: 1.5,
    mx: 0.5,
    transition: 'color 0.3s ease',
  };

  return (
    <AppBar
      
      position="fixed" 
      elevation={0}
      sx={{
        
        backgroundColor: elevated 
          ? (darkMode ? 'rgba(11, 8, 6, 0.7)' : 'rgba(255, 255, 255, 0.7)') 
          : 'transparent', 
        
        borderBottom: elevated 
          ? `1px solid ${darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` 
          : 'none',
        
        
        backdropFilter: elevated ? 'blur(20px)' : 'none', 
        WebkitBackdropFilter: elevated ? 'blur(20px)' : 'none',
        
        boxShadow: elevated ? '0 4px 30px rgba(0, 0, 0, 0.08)' : 'none',
        
       
        transition: 'background-color 0.4s ease-in-out, backdrop-filter 0.4s ease-in-out, border 0.4s ease-in-out',
        
        
        zIndex: 1201, 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 3, md: 8 } }}>
        
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flex: 1, justifyContent: 'flex-start' }}>
          {leftNavItems.map((item) => (
            <motion.div key={item} whileHover="hover" variants={variant}>
              <Button href={`#${item.toLowerCase()}`} sx={navButtonStyle}>
                {item === 'Portfolio' ? 'Portfolio +' : item}
              </Button>
            </motion.div>
          ))}
        </Box>

        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
          <Button 
            href="#hero" 
            sx={{ 
              fontWeight: 700, 
              letterSpacing: '0.25em', 
              fontSize: '1.1rem',
              color: elevated ? (darkMode ? '#FCF6EE' : '#14100D') : '#ffffff',
              lineHeight: 1.2,
              textAlign: 'center',
              transition: 'color 0.3s ease',
            }}
          >
            ALAIYA<br />
            <span style={{ fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.4em' }}>STUDIO</span>
          </Button>
        </Box>

        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          {rightNavItems.map((item) => (
            <motion.div key={item} whileHover="hover" variants={variant}>
              <Button href={`#${item.toLowerCase()}`} sx={navButtonStyle}>
                {item}
              </Button>
            </motion.div>
          ))}
          
          <IconButton 
            onClick={() => setDarkMode((prev) => !prev)} 
            sx={{ 
              ml: 1, 
              color: elevated ? (darkMode ? '#FCF6EE' : '#14100D') : '#ffffff',
              transition: 'color 0.3s ease'
            }}
          >
            {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
}