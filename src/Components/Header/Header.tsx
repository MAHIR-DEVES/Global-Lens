import React from 'react';
import Marquee from 'react-fast-marquee';

const Header = () => {
  return (
    <header className="border-b border-gray-200 py-5 ">
      {/* Top Row - Logo and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full">
        {/* Left Section - Logo & Title */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <h2 className="text-lg sm:text-3xl font-bold whitespace-nowrap">
            Global News
          </h2>
          <p className="text-xs sm:text-xl text-gray-600 hidden sm:block mt-2">
            Global perspective • Human stories
          </p>
        </div>

        {/* Right Section - Search & Subscribe */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
          <button
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 min-w-[80px] sm:min-w-0"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="hidden sm:inline">Search</span>
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-sm font-medium whitespace-nowrap"
            aria-label="Subscribe"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Breaking News Ticker - Bottom Row */}
      <div className="mt-6 w-full bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
        <div className="flex items-center px-2 py-1">
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-3 rounded mr-2 whitespace-nowrap">
            BREAKING
          </span>
          <Marquee
            gradient={false}
            speed={40}
            className="text-xl font-medium"
            pauseOnHover
          >
            <span className="mx-4">
              New climate policy adopted globally! Stay tuned for updates.
            </span>
            <span className="mx-4">
              UN General Assembly convenes emergency session.
            </span>
            <span className="mx-4">
              Global health initiative reaches milestone.
            </span>
            <span className="mx-4">
              Global health initiative reaches milestone.
            </span>
            <span className="mx-4">
              Global health initiative reaches milestone.
            </span>
            <span className="mx-4">
              Global health initiative reaches milestone.
            </span>
          </Marquee>
        </div>
      </div>

      {/* Mobile Subtitle - Only shows on small screens */}
      <p className="text-xs text-gray-600 text-center mt-2 sm:hidden">
        Global perspective • Human stories
      </p>
    </header>
  );
};

export default Header;
