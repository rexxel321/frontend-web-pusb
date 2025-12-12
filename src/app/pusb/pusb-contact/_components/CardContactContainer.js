import React, { useState } from "react";
import Maskot from "../../../../assets/pusbmaskotsay.png";
import { MdOutlineMailOutline, MdInfoOutline } from "react-icons/md";
import { HiOutlineMapPin } from "react-icons/hi2";
import CardContact from "../_components/CardContact";
// import { GetPUSBProfile } from "../../../../pages/api/pusb-profile";

const fallbackProfile = {
  email: "pusb@president.ac.id",
};

const CardContactContainer = () => {
  const [profilePUSB] = useState(fallbackProfile);

  const contactData = [
    {
      contactIcon: <MdOutlineMailOutline className="w-5 h-5 text-gray-800" />,
      contactTitle: "Send a mail to PUSB",
      contactDesc: "for further inquiries.",
      contact: (
        <a
          href={`mailto:${profilePUSB.email}`}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {profilePUSB.email}
        </a>
      ),
    },
    {
      contactIcon: <HiOutlineMapPin className="w-5 h-5 text-gray-800" />,
      contactTitle: "Visit us",
      contactDesc: "in case of onsite needs.",
      contact: (
        <a
          href="https://maps.app.goo.gl/Xm93njoiiHu43QxA9"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          President University - Jababeka Campus
        </a>
      ),
    },
    {
      contactIcon: <MdInfoOutline className="w-5 h-5 text-gray-800" />,
      contactTitle: "Find latest info",
      contactDesc: "on our Instagram!",
      contact: (
        <a
          href="https://www.instagram.com/pusbpresuniv"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @pusb_presuniv
        </a>
      ),
    },
  ];

  return (
    <section className="w-full flex justify-center items-center px-8 lg:px-16">
      <div className="w-96 hidden md:block">
        <img
          src={Maskot}
          width={500}
          height={500}
          alt="Maskot Logo"
          className="w-80 h-96"
        />
      </div>
      <div className="container grid gap-8 py-12 mx-auto lg:grid-cols-1">
        <div className="w-full">
          <p className="text-lg font-medium text-gray-100">Contact us</p>
          <h1 className="mt-2 text-3xl font-semibold text-gray-100 md:text-3xl">
            For Working Together
          </h1>
          <p className="mt-3 text-gray-100 font-medium">
            Build a Positive Relation with Us!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-3">
          {contactData.map((contact, index) => (
            <React.Fragment key={index}>
              <CardContact {...contact} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardContactContainer;
