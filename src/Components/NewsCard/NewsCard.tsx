import React from 'react';

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const NewsCard = ({ item }) => {
  const {
    _id,
    title,
    description,
    snippet,
    url,
    imageUrl,
    language,
    published_at,
    source,
    categories,
    relevance_score,
  } = item || {};

  return (
    <div className="group relative mt-2 sm:mt-5 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
      {/* Image with hover effect */}

      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt="Hunger crisis in Gaza"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
          CRISIS
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 bg-white dark:bg-gray-800">
        {/* Date */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          March 15, 2024 • 4 min read
        </p>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
          {title.substring(0, 50)}...
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          As humanitarian aid remains blocked, families are forced to scavenge
          for scraps in war-torn neighborhoods, with children bearing the brunt
          of malnutrition.
        </p>

        {/* Button */}
        <div className="flex justify-between items-center">
          <Link href={`/news/${_id}`}>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30"
            >
              Read Full Story
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </Link>
          {/* Author/source */}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            By Global Lens Staff
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
