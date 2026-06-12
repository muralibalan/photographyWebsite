import { Typography, Box } from '@mui/material';

export default function SectionTitle({ label, title, description, sx }) {
  return (
    <Box sx={{ textAlign: 'center', mb: 6, px: { xs: 2, md: 0 }, ...sx }}>
      <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 1, fontWeight: 700 }}>
        {label}
      </Typography>
      <Typography variant="h2" sx={{ mb: 2, maxWidth: 760, mx: 'auto' }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 760, mx: 'auto' }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}
