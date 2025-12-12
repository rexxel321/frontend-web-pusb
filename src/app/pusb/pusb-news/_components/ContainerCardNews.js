import React, { useState, useEffect } from "react";
import CardNews from "./CardNews";
import Pagination from "../../../../components/shared/Pagination";
import Sceleton from "../../../../components/shared/Sceleton";
import { ITEMS_PER_PAGE } from "../../../../lib/constants";

const ContainerCardNews = ({ isLatest, news, error }) => {
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (news) {
        let updatedNews = news;

        if (isLatest) {
          updatedNews = news.slice(0, 3);
        } else if (category !== "All") {
          updatedNews = news.filter((n) => n.category === category);
        }

        setFilteredNews(updatedNews);
        setCurrentPage(1);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [category, news, isLatest]);

  if (error) {
    return (
      <main className="w-full min-h-screen px-8 lg:px-16 flex items-center justify-center">
        <p>{error}</p>
      </main>
    );
  }

  if (!news || news.length === 0) {
    return (
      <main className="w-full min-h-screen px-8 lg:px-16 flex items-center justify-center">
        <p>No news available at the moment.</p>
      </main>
    );
  }

  const indexOfLastNews = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstNews = indexOfLastNews - ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      {/* Category Filter */}
      {!isLatest && (
        <div className="w-full flex justify-end my-4">
          <select
            className="bg-transparent border border-white px-4 py-2 rounded-xl text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option className="text-black" value="All">All Categories</option>
            <option className="text-black" value="Workplan">Workplan</option>
            <option className="text-black" value="Event">Event</option>
            <option className="text-black" value="Press Release">Press Release</option>
          </select>
        </div>
      )}

      {/* News Cards */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 my-16">
        {loading
          ? (isLatest ? Array.from({ length: 3 }) : Array.from({ length: currentNews.length }))
              .map((_, i) => <Sceleton key={i} />)
          : currentNews.map((newsItem) => (
              <CardNews key={newsItem.id} news={newsItem} />
            ))}
      </section>

      {/* Pagination */}
      {!loading && filteredNews.length > ITEMS_PER_PAGE && !isLatest && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* See All News */}
      {isLatest && (
        <div className="w-full flex justify-center mt-8">
          <a
            href="/pusb-news/all"
            className="text-blue-400 hover:bg-white py-2 px-4 rounded-lg font-medium text-base hover:text-blue-800 transition-all duration-300"
          >
            See All News
          </a>
        </div>
      )}
    </div>
  );
};

export default ContainerCardNews;
