import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function AnimatedSection({ children, sx, delay = 0 }) {
  return (
    <Box component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ delay }} sx={sx}>
      {children}
    </Box>
  );
}
