import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/HomeArticles.css';

const HomeArticles = () => {
  const navigate = useNavigate();
  const { businessNews, technologyNews, politicsNews } = useContext(GeneralContext);

  const renderNews = (newsList, category) => (
    <div className="home-articles-body">
      <div className="home-articles-head">
        <h2>{category}</h2>
        <p onClick={() => navigate(`/category/${category.toLowerCase()}`)}>View all →</p>
      </div>

      <div className="home-articles">
        {newsList.length > 0 ? (
          newsList.slice(0, 3).map((news, index) => (
            <motion.div
              key={index}
              className="home-article"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(news.url, '_blank')}
            >
              <div className="article-image">
                <img src={news.urlToImage} alt="news" />
              </div>
              <div className="article-content">
                <p className="article-title">{news.title}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="skeleton-loader">Loading...</div>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      className='home-articles-container'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {renderNews(businessNews, "Business")}
      {renderNews(technologyNews, "Technology")}
      {renderNews(politicsNews, "Politics")}
    </motion.div>
  );
};

export default HomeArticles;
