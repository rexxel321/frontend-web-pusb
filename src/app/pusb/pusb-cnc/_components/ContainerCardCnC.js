import React, { useState, useEffect } from "react";
import Sceleton from "../../../../components/shared/Sceleton";
import Pagination from "../../../../components/shared/Pagination";
import CardCnC from "./CardCnC";
import { ITEMS_PER_PAGE } from "../../../../lib/constants";

const ContainerCardCnC = ({ isLatest, cnc, error }) => {
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCnc, setFilteredCnc] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (cnc) {
        let updatedCnc = cnc;

        if (isLatest) {
          updatedCnc = cnc.slice(0, 3);
        } else if (category !== "All") {
          updatedCnc = cnc.filter((n) => n.category === category);
        }

        setFilteredCnc(updatedCnc);
        setCurrentPage(1);
      }
    }, 1000);
  }, [category, cnc, isLatest]);

  if (error) {
    return (
      <main className="w-full min-h-screen px-8 lg:px-16 flex items-center justify-center">
        <p>{error}</p>
      </main>
    );
  }

  if (!cnc || cnc.length === 0) {
    return (
      <main className="w-full min-h-screen px-8 lg:px-16 flex items-center justify-center">
        <p>No cnc available at the moment.</p>
      </main>
    );
  }

  const indexOfLastCnc = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCnc = indexOfLastCnc - ITEMS_PER_PAGE;
  const currentCnc = filteredCnc.slice(indexOfFirstCnc, indexOfLastCnc);
  const totalPages = Math.ceil(filteredCnc.length / ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      {!isLatest && (
        <div className="w-full flex justify-end my-4">
          <select
            className="bg-transparent border border-white px-4 py-2 rounded-xl"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option className="text-black" value="All">
              All Categories
            </option>
            <option className="text-black" value="Art">
              Art & Culture
            </option>
            <option className="text-black" value="Sport">
              Sport
            </option>
            <option className="text-black" value="Society">
              Society & Religion
            </option>
          </select>
        </div>
      )}

      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 my-16">
        {loading
          ? isLatest
            ? Array.from({ length: 3 }).map((_, index) => (
                <Sceleton key={index} />
              ))
            : Array.from({ length: currentCnc.length }).map((_, index) => (
                <Sceleton key={index} />
              ))
          : currentCnc.map((cnc) => (
              <div key={cnc.id}>
                <CardCnC cnc={cnc} />
              </div>
            ))}
      </section>

      {!loading && filteredCnc.length > ITEMS_PER_PAGE && !isLatest && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {isLatest && (
        <div className="w-full flex justify-center mt-8">
          <a
            href="/pusb-cnc/all"
            className="text-blue-400 hover:bg-white py-2 px-4 rounded-lg font-medium text-base hover:text-blue-800 transition duration-300"
          >
            See All CnC's
          </a>
        </div>
      )}
    </div>
  );
};

export default ContainerCardCnC;
