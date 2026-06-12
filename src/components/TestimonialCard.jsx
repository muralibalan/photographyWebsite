import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function TestimonialCard({ quote, name, role }) {
  return (
    <Card component={motion.div} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} sx={{ borderRadius: 4, p: 3, boxShadow: 4, backgroundColor: 'background.paper' }}>
      <CardContent>
        <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3, color: 'text.primary' }}>
          “{quote}”
        </Typography>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
