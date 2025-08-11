import Banner from '@/Components/Banner/Banner';
import Header from '@/Components/Header/Header';
import LatestNews from '@/Components/LatestNews/LatestNews';
import NewsLatter from '@/Components/NewsLatter/NewsLatter';

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <div className="mt-3 sm:mt-6 lg:mt-10">
        <h2 className="text-2xl font-semibold">Latest News</h2>
        <LatestNews></LatestNews>
        <NewsLatter></NewsLatter>
      </div>
    </div>
  );
}
