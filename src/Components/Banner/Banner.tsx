import React from 'react';
import Image from 'next/image'; // or use regular <img> tags

const Banner = () => {
  // Image URLs (CC0 licensed from Unsplash)
  const images = {
    main: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/21-07-2025_UNNews_Gaza_Starvation_Girl.jpg/image770x420cropped.jpg',
    news1:
      'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/18-07-2025-UNICEF-Afghanistan-returnees-01.jpg/image350x235cropped.jpg',
    news2:
      'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bottom:
      'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/04-08-2025-UNIFEED-Gaza-aid-01.jpg/image770x420cropped.jpg',
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4  py-2">
      {/* Left Side (Main News) - 60% */}
      <div className="w-full lg:w-[60%]">
        <div className="relative sm:rounded-xl overflow-hidden shadow-lg h-[200px] sm:h-[518px]">
          <Image
            src={images.main}
            alt="Main news story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-6">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
              BREAKING
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Global Leaders Reach Climate Agreement
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-4">
              195 countries sign landmark treaty to phase out fossil fuels by
              2040.
            </p>
            <button className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-2 rounded-md font-medium w-fit transition-colors">
              Read Full Story
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (Secondary News) - 40% */}
      <div className="w-full lg:w-[40%] flex flex-col gap-4">
        {/* Top Row - Two News Cards */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative sm:rounded-xl overflow-hidden shadow-lg aspect-video sm:h-[200px]">
            <Image
              src={images.news1}
              alt="Business news"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">
                Stock Markets Reach Record High
              </h3>
              <p className="text-white/80 text-sm">
                Global indices surge amid economic recovery
              </p>
            </div>
          </div>

          <div className="flex-1 relative sm:rounded-xl overflow-hidden shadow-lg aspect-video sm:h-[200px]">
            <Image
              src={images.news2}
              alt="Technology news"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">
                New AI Breakthrough Announced
              </h3>
              <p className="text-white/80 text-sm">
                Researchers achieve human-level reasoning
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row - Single Card */}
        <div className="relative sm:rounded-xl overflow-hidden shadow-lg aspect-[4/3] sm:h-[300px]">
          <Image
            src={images.bottom}
            alt="Sports news"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
              SPORTS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              World Cup Finals Set After Dramatic Semis
            </h2>
            <p className="text-white/90 text-sm">
              Underdog team advances to championship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
