import { Container, Grid, Box, Typography } from '@mui/material';
import TestimonialCard from '../components/TestimonialCard.jsx';
import testimonialData from '../data/testimonialData.js';
import StatCounter from '../components/StatCounter.jsx';

export default function Testimonials() {
  return (
    <Box id="testimonials" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 1 }}>
            Trusted by couples
          </Typography>
          <Typography variant="h2" sx={{ maxWidth: 720, mx: 'auto' }}>
            Celebration portraits and ceremony galleries crafted with care.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {testimonialData.map((item, index) => (
            <Grid item xs={12} md={4} key={item.id}>
              <TestimonialCard {...item} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 10 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <StatCounter value={135} label="Weddings photographed" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatCounter value={220} label="Happy couples" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatCounter value={12} label="Years of studio craft" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
