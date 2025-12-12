import React, { useEffect, useState } from "react";
import ContainerCardNews from "../_components/ContainerCardNews";
import { GetPUSBNews } from "../../../../pages/api/pusb-news";

const Page = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  console.log("news:", news);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await GetPUSBNews();
        setNews(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <ContainerCardNews isLatest={false} news={news} error={error} />
  );
};

export default Page;
