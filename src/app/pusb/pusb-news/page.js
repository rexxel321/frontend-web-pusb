import React, { useEffect, useState } from "react";
import ContainerCardNews from "./_components/ContainerCardNews";
import { GetPUSBNews } from "../../../pages/api/pusb-news";

const Page = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await GetPUSBNews();
        if (data) {
          setNews(data);
        }
      } catch (err) {
        setError(`Failed to load news. ${err.message}`);
      }
    };

    fetchNews(); 
  }, []); 

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      <section className="w-full text-center pt-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          PUSB <span className="italic">NEWS</span>
        </h1>
        <div className="text-lg text-center mt-8 mb-4">
          <h3>
            This PUSB News page provides the latest news, updates on current
            events, and information on the newest programs.
          </h3>
          <p className="text-base mt-2">
            We are here to bring you relevant and reliable updates.
          </p>
        </div>
      </section>
      <section className="w-full mt-8">
        <ContainerCardNews isLatest={true} news={news} error={error} />
      </section>
    </main>
  );
};

export default Page;
