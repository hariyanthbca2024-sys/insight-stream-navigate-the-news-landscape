import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import { motion } from 'framer-motion';
import '../styles/TopStories.css';

const TopStories = () => {
  const { topNews } = useContext(GeneralContext);

  return (
    <div className="top-stories-container">
      <h2 className="top-stories-title">Top Stories</h2>

      <div className="stories-scroll">
        {topNews.length > 0 ? (
          topNews.slice(0, 10).map((news, index) => (
            <motion.div
              key={index}
              className="story-item"
              whileHover={{ scale: 1.08 }}
              onClick={() => window.open(news.url, "_blank")}
            >
              <div className="story-circle">
                <img src={news.urlToImage} alt="story" />
              </div>
              <p className="story-text">{news.title}</p>
            </motion.div>
          ))
        ) : (
          <div className="skeleton-stories">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default TopStories;
