import React, { useEffect, useState } from "react";
import { GetPUSBNewsBySlug } from "../../../../pages/api/pusb-news";
import Loader from "../../../../components/shared/Loader";
import ContainerNews from "./_components/ContainerNews";

const Page = ({ slug }) => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const fetchedNews = await GetPUSBNewsBySlug(slug);
        setNews(fetchedNews);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);

  return (
    <div className="w-full flex justify-center items-center">
      {loading ? <Loader /> : news && <ContainerNews news={news} />}
    </div>
  );
};

export default Page;
