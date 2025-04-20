import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PopupProps {
  isOpen: boolean;
  title: string;
  features: string[];
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, title, features, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="popup-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
          >
            <motion.button
              className="popup-close"
              onClick={onClose}
              whileHover={{ rotate: 180, backgroundColor: '#a11e1e' }}
              whileTap={{ scale: 0.9 }}
            >
              X
            </motion.button>
            <h3>{title}</h3>
            <ul>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.03 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;