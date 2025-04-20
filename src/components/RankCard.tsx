import React from 'react';
import { motion } from 'framer-motion';

interface RankCardProps {
  title: string;
  originalPrice: string;
  price: string;
  features: string[];
  showPopup: (title: string, features: string[]) => void;
}

const RankCard: React.FC<RankCardProps> = ({
  title,
  originalPrice,
  price,
  features,
  showPopup,
}) => {
  return (
    <motion.div
      className="rank-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -15,
        rotateX: 5,
        boxShadow: '0 15px 35px rgba(196, 41, 41, 0.25)',
        borderColor: 'rgba(196, 41, 41, 0.3)',
      }}
    >
      <h2>{title}</h2>
      <span className="original-price">{originalPrice}</span>
      <span className="price-label">Harga</span>
      <div className="price">{price}</div>
      <motion.button
        className="info-btn"
        onClick={() => showPopup(title, features)}
        whileHover={{ scale: 1.1, backgroundColor: '#d98b00' }}
        whileTap={{ scale: 0.95 }}
      >
        i
      </motion.button>
      <motion.a
        href={`https://wa.me/628892910155?text=Min%20mau%20beli%20${encodeURIComponent(title)}`}
        target="_blank"
        className="buy-button"
        whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(196, 41, 41, 0.6)' }}
        whileTap={{ scale: 0.95 }}
      >
        Beli Sekarang
      </motion.a>
    </motion.div>
  );
};

export default RankCard;