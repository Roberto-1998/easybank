import React from 'react';
import './Articles.css';
import { articlesInfo } from '../../constants/articles-info';

const Articles = () => {
  return (
    <section className='articles-background'>
      <div className='articles-content'>
        <h1>Latest Articles</h1>

        <div className='articles-card-content'>
          {articlesInfo.map((article) => (
            <div key={article.title} className='article-card'>
              <img src={article.img} alt={article.title} />
              <div className='article-card-text'>
                <p className='articles-author'>{article.author}</p>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
