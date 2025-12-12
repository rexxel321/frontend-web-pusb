import React from "react";
import { Modal } from "flowbite-react";
import ModalCardMember from "./ModalCardMember";
import { mocsMinisters, mocsMembers, mofMinisters, mofMembers, mosaMinisters, mosaMembers, mosdMinisters, mosdMembers, mocMinisters, mocMembers } from "../../../../lib/data";

const GenericModal = ({
  openModal,
  handleModalDescription,
  ministryName,
  header,
  description,
  subdivisions,
  ministers,
  members,
  footerCaption,
}) => (
  <Modal
    dismissible
    show={openModal}
    onClose={handleModalDescription}
    size="6xl"
    className="overflow-y-auto bg-opacity-75 bg-transparent"
  >
    <Modal.Header>{header}</Modal.Header>
    <Modal.Body>
      <div className="h-[75vh] overflow-y-auto w-full space-y-6 text-black bg-white px-4 lg:px-8 py-4">
        <div className="border-b-2 pb-2">
          <h2 className="font-bold text-xl lg:text-3xl">{description.title}</h2>
          <p className="font-medium text-sm lg:text-base mt-1">{description.text}</p>
        </div>

        <div>
          <div className="border-b-2 py-2 mb-2">
            <p className="font-semibold text-xl lg:text-3xl">Sub Divisions</p>
          </div>
          <ul className="pl-2">
            {subdivisions.map((sub, i) => (
              <li key={i}>
                <h1 className="text-lg font-semibold">{sub.title}</h1>
                <p className="pl-2 font-medium">{sub.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-2xl font-semibold">{`All Ministers & Members of ${ministryName}`}</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 mt-4">
            {ministers.map((m, i) => (
              <ModalCardMember key={`min-${i}`} {...m} isMinister />
            ))}
            {members.map((m, i) => (
              <ModalCardMember key={`mem-${i}`} {...m} />
            ))}
          </div>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer className="w-full flex justify-center h-10">
      <p className="text-sm text-white font-bold">{footerCaption}</p>
    </Modal.Footer>
  </Modal>
);

export const ModalMOCSData = (props) => (
  <GenericModal
    {...props}
    ministryName="MOCS"
    header="MOCS - Ministry of Cabinet Secretary"
    description={{
      title: "We Work Behind The Scene",
      text:
        "Ministry of Cabinet Secretary in PUSB is the only one who handles all administrative stuff in all PUSB events. Only the secretary can make, add, delete, and change all the administrative stuff in PUSB events.",
    }}
    subdivisions={[
      {
        title: "General Secretary",
        text:
          "Handling any administrative matters (proposal, MOM, and letters).",
      },
      {
        title: "CnC Secretary",
        text:
          "Supervise clubs and communities in terms of their administrative matters (proposal and accountability report).",
      },
    ]}
    ministers={mocsMinisters}
    members={mocsMembers}
    footerCaption="CC Minister of Cabinet Secretary"
  />
);

export const ModalMOFData = (props) => (
  <GenericModal
    {...props}
    ministryName="MOF"
    header="MOF - Ministry of Finance"
    description={{
      title: "We Handle Financial Things in PUSB Events",
      text:
        "Ministry of Finance is the one handling all the budgeting in PUSB events, also responsible for sponsor the President Store PUSB events.",
    }}
    subdivisions={[
      {
        title: "Administrative",
        text:
          "A. ACCOUNTANT: Record all transaction of PUSB cash and President Store.\nB. TREASURER: Become a treasurer in every PUSB events, handle PUSB cash in internal PUSB and saving the money.",
      },
      {
        title: "Entrepreneurship",
        text:
          "A. SPONSORSHIP: Find sponsorship for PUSB’s events and handle 3P (PUSB Partnership Program).\nB. PRESIDENT STORE: Gaining more profits by selling merchandise with President University’s logo.",
      },
    ]}
    ministers={mofMinisters}
    members={mofMembers}
    footerCaption="CC Minister of Cabinet Finance"
  />
);

// MOSA
export const ModalMOSAData = (props) => (
  <GenericModal
    {...props}
    ministryName="MOSA"
    header="MOSA - Ministry of Student Affairs"
    description={{
      title: "Supervising and Handling Student Activity",
      text:
        "Ministry of Student Activity is responsible to supervise the clubs and communities in President University and also handling events related to art, sport, and society, whilst also becoming the bridge for the regular night student.",
    }}
    subdivisions={[
      { title: "Art", text: "Handling events in art division." },
      { title: "Sport", text: "Handling events in sport division." },
      { title: "Society", text: "Handling events in society division." },
      { title: "Regular Night", text: "Bridge between PUSB and regular night students." },
    ]}
    ministers={mosaMinisters}
    members={mosaMembers}
    footerCaption="CC Minister of Cabinet Student Activity"
  />
);

// MOSD
export const ModalMOSDData = (props) => (
  <GenericModal
    {...props}
    ministryName="MOSD"
    header="MOSD - Ministry of Self Development"
    description={{
      title: "We Are the Brain",
      text:
        "Ministry of Self Development responsible to accommodate conducive environment for student through leadership promotion, character building, skill and knowledge enhancement, correspondingly in research and evaluation.",
    }}
    subdivisions={[
      {
        title: "Advocation",
        text:
          "Holding the rules and regulation of PUSB as a legal organization at President University. Improves character building.",
      },
      {
        title: "Research and Development",
        text:
          "Promote growth and development for PUSB members and activities through aspiration, research and evaluation.",
      },
      {
        title: "Skill and Knowledge",
        text:
          "Enrich skill and knowledge through digital media such as articles, podcast, study issues, and training.",
      },
    ]}
    ministers={mosdMinisters}
    members={mosdMembers}
    footerCaption="CC Minister of Cabinet Self Development"
  />
);

// MOC
export const ModalMOCData = (props) => (
  <GenericModal
    {...props}
    ministryName="MOC"
    header="MOC - Ministry of Communication"
    description={{
      title: "The Bridge Between All Presunivers and PUSB",
      text:
        "Ministry of Communication is responsible as the bridge of Presunivers, PUSB, and external parties. We handle all the PUSB’s social media and communications.",
    }}
    subdivisions={[
      { title: "Internal Affairs", text: "Bridge between PUSB and Presunivers." },
      { title: "External Affairs", text: "Bridge with External parties (companies, media partner, BEM relation)." },
      { title: "Multimedia", text: "Make design, take photo, or make video for PUSB’s activity." },
      { title: "Social Media Specialist", text: "Handling PUSB’s Tiktok, Youtube, and Podcast." },
      { title: "Web Development", text: "Handling PUSB’s website." },
    ]}
    ministers={mocMinisters}
    members={mocMembers}
    footerCaption="CC Minister of Cabinet Communication"
  />
);
