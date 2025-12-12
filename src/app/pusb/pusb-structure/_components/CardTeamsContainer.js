import React, { useState } from "react";
import CardMinister from "./CardMinister";
import CardMember from "./CardMember";
import {
  execMinisters,
  mocsMinisters,
  mofMinisters,
  mosaMinisters,
  mosdMinisters,
  mocMinisters,
  mocsMembers,
  mofMembers,
  mosaMembers,
  mosdMembers,
  mocMembers,
} from "../../../../lib/data";
import {
  ModalMOCSData,
  ModalMOFData,
  ModalMOSAData,
  ModalMOSDData,
  ModalMOCData,
} from "./ModalMinisterData";

const LabelHeader = ({ title }) => (
  <div className="w-full py-8 text-center" style={{ fontFamily: "Poppins" }}>
    <h2 className="text-6xl font-bold">{title}</h2>
  </div>
);

const LabelFooter = ({ title, ministersCount }) => (
  <div className="w-full mt-8 text-center" style={{ fontFamily: "Poppins" }}>
    <h2 className="text-[22px] lg:text-4xl font-semibold">
      {ministersCount === 1
        ? `Minister of ${title}`
        : `Minister & Vice Minister of ${title}`}
    </h2>
  </div>
);

const TeamsContainer = ({
  title,
  ministersCount,
  ministersData,
  membersData,
  ModalComponent,
}) => {
  const [openMinisterModal, setOpenMinisterModal] = useState(false);

  const handleMinisterModal = () => {
    setOpenMinisterModal((prev) => !prev);
  };

  return (
    <div className="w-full px-8 lg:px-16">
      <LabelHeader title={title} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
        <div className="w-full flex flex-col items-center">
          <div
            className={`w-full grid gap-2 ${
              ministersCount === 1 ? "flex justify-center" : "grid-cols-2"
            }`}
          >
            {ministersData.map((minister, index) => (
              <div key={index} className="flex justify-center items-center">
                <CardMinister
                  name={minister.name}
                  position={minister.position}
                  image={minister.image || null}
                />
              </div>
            ))}
          </div>
          <LabelFooter title={title} ministersCount={ministersCount} />
          <button
            className="w-3/4 lg:w-1/2 text-gray-950 bg-white py-1 rounded-lg hover:bg-gray-900 active:bg-gray-900 transition-all duration-300 hover:text-white mt-4"
            onClick={handleMinisterModal}
          >
            <p className="text-lg font-medium hover:font-bold">
              Ministry Details
            </p>
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mt-4 lg:mt-0">
            Members of {title}
          </h2>
          <div className="w-full grid grid-cols-2 gap-2">
            {membersData.map((member, index) => (
              <CardMember
                key={index}
                role={member.position}
                imageSrc={member.image || ""}
                {...member}
              />
            ))}
          </div>
        </div>
      </div>
      {openMinisterModal && (
        <div className="w-full h-screen overflow-hidden flex justify-center items-center fixed top-0 left-0 bg-black bg-opacity-50 z-50">
          <ModalComponent
            openModal={openMinisterModal}
            handleModalDescription={handleMinisterModal}
          />
        </div>
      )}
    </div>
  );
};

export const MOCSTeamsContainer = () => (
  <TeamsContainer
    title="MOCS"
    ministersCount={1}
    ministersData={mocsMinisters}
    membersData={mocsMembers}
    ModalComponent={ModalMOCSData}
  />
);

export const MOFTeamsContainer = () => (
  <TeamsContainer
    title="MOF"
    ministersCount={1}
    ministersData={mofMinisters}
    membersData={mofMembers}
    ModalComponent={ModalMOFData}
  />
);

export const MOSATeamsContainer = () => (
  <TeamsContainer
    title="MOSA"
    ministersCount={2}
    ministersData={mosaMinisters}
    membersData={mosaMembers}
    ModalComponent={ModalMOSAData}
  />
);

export const MOSDTeamsContainer = () => (
  <TeamsContainer
    title="MOSD"
    ministersCount={1}
    ministersData={mosdMinisters}
    membersData={mosdMembers}
    ModalComponent={ModalMOSDData}
  />
);

export const MOCTeamsContainer = () => (
  <TeamsContainer
    title="MOC"
    ministersCount={2}
    ministersData={mocMinisters}
    membersData={mocMembers}
    ModalComponent={ModalMOCData}
  />
);

export const ExecTeamsContainer = ({ title = "President & Vice President" }) => (
  <div className="w-full px-4 lg:px-8 py-6 flex flex-col items-center">
    <div className="w-full py-4 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-poppins">
        {title}
      </h2>
    </div>
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-center">
        <div className="sm:col-start-1 sm:col-span-1 flex justify-end">
          <CardMinister {...execMinisters[1]} />
        </div>
        <div className="sm:col-start-2 sm:col-span-1 flex justify-center">
          <CardMinister {...execMinisters[0]} />
        </div>
        <div className="sm:col-start-3 sm:col-span-1 flex justify-start">
          <CardMinister {...execMinisters[2]} />
        </div>
      </div>
    </div>
    <div className="w-full mt-8 sm:mt-12 text-center">
      <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold font-poppins">
        President & Vice Presidents of Sanctus Cabinet
      </h2>
    </div>
  </div>
);
