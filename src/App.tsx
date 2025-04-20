import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import RankCard from './components/RankCard';
import Popup from './components/Popup';
import ranks from './data/ranks';
import './styles/app.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupFeatures, setPopupFeatures] = useState<string[]>([]);
  const [visibleRanks, setVisibleRanks] = useState(6);

  const showPopup = (title: string, features: string[]) => {
    setPopupTitle(title);
    setPopupFeatures(features);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLoadMore = () => {
    setVisibleRanks(prev => Math.min(prev + 6, ranks.length));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        if (visibleRanks < ranks.length) {
          handleLoadMore();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleRanks]);

  return (
    <div className="app">
      <Header />
      
      <main className="rank-container">
        <div className="rank-grid">
          {ranks.slice(0, visibleRanks).map((rank, index) => (
            <motion.div
              key={rank.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 100 
              }}
            >
              <RankCard
                title={rank.title}
                originalPrice={rank.originalPrice}
                price={rank.price}
                features={rank.features}
                showPopup={showPopup}
              />
            </motion.div>
          ))}
        </div>
        
        {visibleRanks < ranks.length && (
          <motion.button
            className="load-more-button"
            onClick={handleLoadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tampilkan Lebih Banyak
          </motion.button>
        )}
      </main>

      <Popup
        isOpen={isPopupOpen}
        title={popupTitle}
        features={popupFeatures}
        onClose={closePopup}
      />
      
      <footer className="footer">
        <p>© 2025 MawiSMP - Semua Hak Dilindungi</p>
      </footer>
    </div>
  );
}

export default App;