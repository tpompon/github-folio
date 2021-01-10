import React from 'react';
import { motion } from 'framer-motion';

const Page: React.FC = ({ children }) => (
  <motion.div initial="hidden" animate="visible" variants={motionVariants}>
    {children}
  </motion.div>
);

const motionVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3
    }
  }
};

export default Page;
