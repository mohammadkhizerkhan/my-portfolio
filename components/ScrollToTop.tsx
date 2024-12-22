import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </motion.button>
    </AnimatePresence>
  );
};