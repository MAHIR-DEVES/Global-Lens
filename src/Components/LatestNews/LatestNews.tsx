import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { NewsItem } from '@/types/News';

const LatestNews = async () => {
  const data = await fetch('https://globellens.vercel.app/api/news');
  const news: NewsItem[] = await data.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {news.map(item => (
        <NewsCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default LatestNews;
