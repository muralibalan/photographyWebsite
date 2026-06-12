import { useMemo, useState } from 'react';
import { Box, Container, Typography, Tab, Tabs, ImageList, ImageListItem, Dialog, DialogContent, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import galleryData from '../data/galleryData.js';
import CloseIcon from '@mui/icons-material/Close';

const categories = ['All', 'Weddings', 'Pre-Weddings', 'Portraits', 'Reception', 'Candid Moments'];

export default function Gallery() {
  const [value, setValue] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (value === 'All' ? galleryData : galleryData.filter((item) => item.category === value)),
    [value]
  );

  return (
    <Box id="gallery" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 1 }}>
            Gallery
          </Typography>
          <Typography variant="h2" sx={{ maxWidth: 720, mx: 'auto' }}>
            Select the story you want to revisit—each frame is a quiet celebration of emotion.
          </Typography>
        </Box>
        <Tabs
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 6 }}
        >
          {categories.map((category) => (
            <Tab key={category} label={category} value={category} sx={{ textTransform: 'none', fontWeight: 700 }} />
          ))}
        </Tabs>
        <ImageList variant="masonry" cols={3} gap={16} sx={{ columnCount: { xs: 1, sm: 2, md: 3 }, mx: 0 }}>
          {filtered.map((item, index) => (
            <ImageListItem key={item.id} sx={{ mb: 2, cursor: 'pointer', overflow: 'hidden', borderRadius: 3 }} onClick={() => setSelected(item)}>
              <motion.img
                src={`${item.src}&w=800&q=80`}
                alt={item.title}
                loading="lazy"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                style={{ width: '100%', display: 'block', borderRadius: '24px' }}
              />
              <Box
                component={motion.div}
                whileHover={{ opacity: 1 }}
                sx={{
                  position: 'absolute', bottom: 16, left: 16, right: 16,
                  opacity: 0,
                  pointerEvents: 'none',
                  color: '#fff',
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {item.category}
                </Typography>
                <Typography variant="body2">{item.title}</Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} maxWidth="lg" fullWidth>
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton onClick={() => setSelected(null)} sx={{ position: 'absolute', top: 16, right: 16, zIndex: 2, color: 'common.white' }}>
            <CloseIcon />
          </IconButton>
          {selected && (
            <Box component="img" src={`${selected.src}&w=1400&q=80`} alt={selected.title} loading="lazy" sx={{ width: '100%', height: 'auto', display: 'block' }} />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
