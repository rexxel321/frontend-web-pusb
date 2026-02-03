import React from "react";
import {
  ExecTeamsContainer,
  MOCSTeamsContainer,
  MOFTeamsContainer,
  MOSATeamsContainer,
  MOSDTeamsContainer,
  MOCTeamsContainer,
} from "./_components/CardTeamsContainer";
import pusblogo from "../../../assets/pusblogo2.png";

const Page = () => {
  return (
    <main className="w-full min-h-screen pb-20">
      <section className="w-full h-[86vh] bg-gray-900 flex flex-col justify-center items-center gap-4 mochiy-pop-one-bold">
        <img
          src={pusblogo}
          alt="PUSB Logo"
          width={500}
          height={500}
          className="w-44 lg:w-56"
        />
        <div className="text-center px-4">
          <h2 className="text-2xl lg:text-5xl tracking-wide font-extrabold text-white">
            Cabinet Structure
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold">
            President University Student Board 2025
          </h2>
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Voxaris Cabinet
          </h2>
        </div>
      </section>
{/* 
      <h3 className="text-4xl text-center font-extrabold mt-8 mb-4">
        WILL BE REVEALED SOON!
      </h3> */}

      {/* Uncomment when the structure is finalized */}
      <section className="w-full h-full">
        <ExecTeamsContainer handleMinisterModal={() => {}} openMinisterModal={false} />
      </section>
      <section className="w-full h-full">
        <MOCSTeamsContainer handleMinisterModal={() => {}} openMinisterModal={false} />
      </section>
      <section className="w-full h-full">
        <MOFTeamsContainer handleMinisterModal={() => {}} openMinisterModal={false} />
      </section>
      <section className="w-full h-full">
        <MOSATeamsContainer handleMinisterModal={() => {}} openMinisterModal={false} />
      </section>
      <section className="w-full h-full">
        <MOSDTeamsContainer handleMinisterModal={() => {}} openMinisterModal={false} />
      </section>
      <section className="w-full h-full">
        <MOCTeamsContainer handleMinisterModal={() => {}} openMinisterModal={false} />
      </section>
    </main>
  );
};

export default Page;
