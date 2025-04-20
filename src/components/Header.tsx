import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        boxShadow: scrolled 
          ? '0 4px 20px rgba(196, 41, 41, 0.6)' 
          : '0 4px 20px rgba(196, 41, 41, 0.4)',
        height: scrolled ? '80px' : '120px'
      }}
      transition={{ duration: 0.3 }}
      className="header"
    >
      <div className="header-content">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          MawiSMP Rank Store
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Rank untuk server global alias server skyblock, survival, oneblock!
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;