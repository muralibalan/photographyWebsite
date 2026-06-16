import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const leftNavItems = ['Home', 'About', 'Portfolio'];
const rightNavItems = ['Packages', 'Contact'];
const allNavItems = [...leftNavItems, ...rightNavItems];

export default function Navbar({ darkMode, setDarkMode }) {
  const [elevated, setElevated] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const variant = {
    hover: { y: -1, opacity: 0.8, transition: { duration: 0.1 } },
  };

  // Color variables definition
  const brandDark = '#14100D';
  const brandLight = '#FCF6EE';
  
  // Custom Drawer Colors (Ithai unga theme-ku ethaapola change pannikalam)
  const drawerBgDark = '#121212';   // Dark mode drawer background
  const drawerBgLight = '#FFFFFF';  // Light mode drawer background

  const dynamicColor = elevated 
    ? (darkMode ? brandLight : brandDark) 
    : '#ffffff';

  const navButtonStyle = {
    fontWeight: 400,
    fontSize: 13,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: dynamicColor, 
    px: 1.5,
    mx: 0.5,
    transition: 'color 0.3s ease',
  };

  return (
    <>
      <AppBar
        position="fixed" 
        elevation={0}
        sx={{
          backgroundColor: elevated 
            ? (darkMode ? 'rgba(20, 16, 13, 0.85)' : 'rgba(252, 246, 238, 0.85)') 
            : 'transparent', 
          borderBottom: elevated 
            ? `1px solid ${darkMode ? 'rgba(252,246,238,0.08)' : 'rgba(20,16,13,0.08)'}` 
            : 'none',
          backdropFilter: elevated ? 'blur(25px)' : 'none', 
          WebkitBackdropFilter: elevated ? 'blur(25px)' : 'none',
          boxShadow: elevated ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
          transition: 'all 0.4s ease-in-out',
          zIndex: 1201, 
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 3, md: 8 } }}>
          
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: dynamicColor }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Left Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flex: 1, justifyContent: 'flex-start' }}>
            {leftNavItems.map((item) => (
              <motion.div key={item} whileHover="hover" variants={variant}>
                <Button href={`#${item.toLowerCase()}`} sx={navButtonStyle}>
                  {item === 'Portfolio' ? 'Portfolio +' : item}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Logo */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button 
              href="#hero" 
              sx={{ 
                fontWeight: 700, 
                letterSpacing: '0.25em', 
                fontSize: '1.1rem',
                color: dynamicColor,
                lineHeight: 1.2,
                textAlign: 'center',
                transition: 'color 0.3s ease',
              }}
            >
              ALAIYA<br />
              <span style={{ fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.4em' }}>STUDIO</span>
            </Button>
          </Box>

          {/* Desktop Right Items */}
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
              sx={{ ml: 1, color: dynamicColor, transition: 'color 0.3s ease' }}
            >
              {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </IconButton>
          </Box>

          {/* Mobile Dark Mode Switcher */}
          <IconButton 
            onClick={() => setDarkMode((prev) => !prev)} 
            sx={{ display: { md: 'none' }, color: dynamicColor }}
          >
            {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Slide-out Mobile Menu Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '280px',
            // Updated Drawer Background Colors
            backgroundColor: darkMode ? drawerBgDark : drawerBgLight,
            color: darkMode ? '#FFFFFF' : '#000000',
            backgroundImage: 'none',
            boxShadow: '4px 0px 40px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {/* Close Button Header */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={handleDrawerToggle} color="inherit">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

        {/* Navigation Items */}
        <Box onClick={handleDrawerToggle} sx={{ pt: 2, px: 2 }}>
          <List>
            {allNavItems.map((item) => (
              <ListItem key={item} disablePadding sx={{ mb: 1 }}>
                <ListItemButton 
                  component="a" 
                  href={`#${item.toLowerCase()}`}
                  sx={{ 
                    borderRadius: '8px',
                    py: 1.8,
                    '&:hover': {
                      backgroundColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={item === 'Portfolio' ? 'Portfolio +' : item} 
                    primaryTypographyProps={{
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: '0.25em',
                      textAlign: 'center',
                      textTransform: 'uppercase'
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}