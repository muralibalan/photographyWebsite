import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StatCounter({ value, label }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / value), 20);
    const timer = setInterval(() => {
      start += 1;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <Box ref={ref} component={motion.div} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} sx={{ textAlign: 'center' }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 1 }}>
        {count}+
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {label}
      </Typography>
    </Box>
  );
}
