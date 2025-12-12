import { useEffect, useState } from "react";
import ContainerCardCnC from "../_components/ContainerCardCnC";
import { GetPUSBCNC } from "../../../../pages/api/pusb-cnc";

const Page = () => {
  const [cncs, setCncs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetPUSBCNC();
        setCncs(data || []);
      } catch (err) {
        setError(`Failed to load CNC data. ${err}`);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      <ContainerCardCnC cnc={cncs} error={error} />
    </main>
  );
};

export default Page;
