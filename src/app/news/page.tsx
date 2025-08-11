import NewsList from '@/Components/NewsList/NewsList';

const NewsPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-12">Latest News</h2>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsPage;
