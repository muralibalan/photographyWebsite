import { Box, Container, Grid, Typography, Card, CardContent, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const packages = [
  {
    title: 'Signature Wedding',
    price: '₹145,000',
    features: ['Full ceremony coverage', 'Portrait session', 'Reception storytelling', 'Digital gallery & highlights edit'],
  },
  {
    title: 'Ceremony & Rituals',
    price: '₹95,000',
    features: ['Temple coverage', 'Family portraits', 'Candid moments', 'Luxury slideshow'],
    highlight: true,
  },
  {
    title: 'Portrait Edit',
    price: '₹48,000',
    features: ['Couple portraits', 'Fine art retouching', 'Editorial composition', 'Personal styling guidance'],
  },
];

export default function Packages() {
  return (
    <Box id="packages" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 1 }}>
            Collections
          </Typography>
          <Typography variant="h2" sx={{ maxWidth: 720, mx: 'auto' }}>
            Select a collection built for intimate ceremonies and timeless portraits.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {packages.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.12 }}>
                <Card sx={{ borderRadius: 4, boxShadow: item.highlight ? 10 : 4, border: item.highlight ? '1px solid rgba(201,168,110,0.35)' : '1px solid rgba(0,0,0,0.06)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 3, color: 'primary.main' }}>
                      {item.price}
                    </Typography>
                    <Stack spacing={1.5} sx={{ mb: 4 }}>
                      {item.features.map((line) => (
                        <Typography key={line} variant="body2" color="text.secondary">
                          • {line}
                        </Typography>
                      ))}
                    </Stack>
                    <Button href="#contact" variant={item.highlight ? 'contained' : 'outlined'} color="secondary" fullWidth>
                      Enquire now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
