import { motion } from 'framer-motion';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

export default function PortfolioCard({ image, title, subtitle }) {
  return (
    <Card component={motion.div} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} sx={{ boxShadow: 6, borderRadius: 3, overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia component="img" image={image} alt={title} loading="lazy" sx={{ height: { xs: 320, md: 380 }, objectFit: 'cover', transition: 'transform 0.7s ease', '&:hover': { transform: 'scale(1.05)' } }} />
      </Box>
      <CardContent sx={{ p: 3, backgroundColor: 'rgba(255,255,255,0.9)' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}
