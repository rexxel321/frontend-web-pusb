import React, { useEffect, useState } from "react";
import { GetPUSBCNC } from "../../../pages/api/pusb-cnc";
import ContainerCardCnC from "./_components/ContainerCardCnC";

const Page = () => {
  const [cncs, setCncs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCncs = async () => {
      try {
        const data = await GetPUSBCNC();
        if (data) {
          setCncs(data);
        }
      } catch (err) {
        setError(`Failed to load CNC data. ${err.message}`);
      }
    };

    fetchCncs(); 
  }, []); 

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      <section className="w-full text-center pt-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          PUSB <span className="italic">CNCs</span>
        </h1>
        <div className="text-lg text-center mt-8 mb-4">
          <h3 className="px-4">
            A Club or Community is an official Student Activity Unit.
          </h3>
          <p className="text-base mt-2">
            This page offers updates regarding the list of active Clubs and
            Communities in President University.
          </p>
        </div>
      </section>
      <section className="w-full mt-8">
        <ContainerCardCnC isLatest={true} cnc={cncs} error={error} />
      </section>
    </main>
  );
};

export default Page;
