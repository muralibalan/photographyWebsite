import { useState } from 'react';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1800);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 18, mt: 2 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth required />
      </Stack>
      <TextField
        label="Tell us your wedding story"
        name="message"
        value={form.message}
        onChange={handleChange}
        multiline
        rows={5}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ width: { xs: '100%', sm: 'auto' } }}>
        {submitted ? 'Message Sent' : 'Send Enquiry'}
      </Button>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        We typically reply within one business day and can also connect directly on WhatsApp for fast planning.
      </Typography>
    </Box>
  );
}
