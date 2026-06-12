import { Box, Container, Grid, Typography, Button, Stack, Link, Paper } from '@mui/material';
import ContactForm from '../components/ContactForm.jsx';

export default function ContactSection() {
  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'sticky', top: { md: 100, xs: 'auto' } }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 1 }}>
                Get in touch
              </Typography>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Let’s plan the imagery that feels personal and cinematic.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Tell us about your date, venue, and what matters most. We reply with clarity, styling notes, and thoughtful package guidance.
              </Typography>
              <Paper sx={{ p: 3, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.92)' }} elevation={2}>
                <Stack spacing={2}>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>Contact details</Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Phone:</strong> <Link href="tel:+919876543210" color="inherit">+91 98765 43210</Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Email:</strong> <Link href="mailto:hello@alaiyastudio.com" color="inherit">hello@alaiyastudio.com</Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Location:</strong> Chennai, India
                  </Typography>
                  <Button href="https://wa.me/919876543210" target="_blank" rel="noreferrer" variant="contained" color="secondary">
                    Message on WhatsApp
                  </Button>
                </Stack>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
