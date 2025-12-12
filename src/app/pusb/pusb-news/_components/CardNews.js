import React from "react";
import { formatDateNews } from "../../../../utils/formatTime";

const CardNews = ({ news }) => {
  const { day, month } = formatDateNews(news.publish_date);

  return (
    <div className="group relative block h-56 bg-black border shadow shadow-white">
      <img
        alt="News Thumbnail"
        src={news.thumbnail}
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-4 sm:p-6 lg:p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
            {news.category}
          </p>
          <div>
            <p className="text-3xl font-semibold leading tracking">{day}</p>
            <p className="leading uppercase">{month}</p>
          </div>
        </div>
        <div className="mt-8 lg:mt-16">
          <p className="translate-y-4 group-hover:-translate-y-4 transform transition-all duration-300">
            {news.title}
          </p>
          <div className="-translate-y-16 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <a href={`/pusb/pusb-news/${news.id}`} className="text-sm text-white text-justify hover:underline">
              {news.description}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
