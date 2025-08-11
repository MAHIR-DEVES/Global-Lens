'use client';
import { fetchNews } from '@/lib/fetchNews';
import { NewsItem } from '@/types/News';
import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import SearchBsr from './SearchBsr';
import CategoryFilter from './CategoryFilter';

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<String>('');
  const [category, setCategory] = useState<String>('');

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };
    getNews();
  }, [category, search]);

  console.log(news);

  return (
    <div>
      <div className="sm:flex sm:justify-between sm:items-center sm:gap-3 mt-3">
        <SearchBsr onSearch={setSearch}></SearchBsr>
        <CategoryFilter onCategory={setCategory}></CategoryFilter>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map(item => (
          <NewsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
