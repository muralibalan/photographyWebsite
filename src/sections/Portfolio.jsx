import { Grid, Container, Box, Typography, Button } from '@mui/material';
import PortfolioCard from '../components/PortfolioCard.jsx';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Temple moments & candid rituals',
    subtitle: 'Rich detail, warm color, and authentic expressions from every ceremony.',
    image: 'public/Temple-Wedding-Photography.jpg',
  },
  {
    title: 'Editorial portraits & family frames',
    subtitle: 'Elegant, graceful portraits with flattering light and thoughtful composition.',
    image: 'public/wedding9.jpg',
  },
  {
    title: 'Reception highlights & atmosphere',
    subtitle: 'Classic storytelling that honors both celebration and quiet connection.',
    image: 'public/protfolio.jpg',
  },
];

export default function Portfolio() {
  return (
    <Box id="portfolio" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.default' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 1 }}>
            Featured Portfolio
          </Typography>
          <Typography variant="h2" sx={{ maxWidth: 680, mx: 'auto' }}>
            A curated selection of weddings, portraits, and intimate stories from Chennai.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: index * 0.15 }}>
                <PortfolioCard image={item.image} title={item.title} subtitle={item.subtitle} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button href="#gallery" variant="contained" color="primary" size="large">
            Explore more stories
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
