import React from "react"; 
import { AiFillCaretRight } from "react-icons/ai";
import pusblogo from "../../../../assets/pusblogo2.png";

const HomeHeroCabinetSection = () => {
  return (
    <section className="w-full min-h-[35vh] bg-gray-900 dark:bg-gray-900">
      <div className="w-full h-full px-4 lg:px-16 py-8 mx-auto">
        <div className="w-full h-full lg:flex lg:justify-center lg:items-center">
          {/* Image */}
          <div className="w-full max-w-sm flex justify-center">
         <img
              className="w-3/6 h-52 rounded-lg lg:h-[15rem] object-cover"
              src={pusblogo}
              alt="PUSB Logo"
              width={500}
              height={500}
            />
          </div>

          {/* Content */}
          <div className="w-full lg:flex lg:flex-col lg:justify-center mt-8 px-4 lg:mt-0 py-4">
            <p className="text-xl lg:text-3xl font-semibold text-white">
              <span className="flex items-center">
                <span className="h-px flex-1 bg-white"></span>
                <span className="shrink-0 px-4 lg:px-6">Voxaris Cabinet</span>
                <span className="h-px flex-1 bg-white"></span>
              </span>
            </p>

            <div className="mt-4 text-justify">
              <p>
                <span className="font-bold text-lg">“Voxaris”</span> "Voxaris" embodies the spirit of voice, 
                action, and strength. It portrays a commitment to listening and empowering voices to action and shared progress.
                 The cabinet is devoted to building an active, strong, and impactful community in which it aspires to cultivate a vibrant and responsive 
                 student body that gives active contribution to President University.
              </p>
            </div>

            {/* Button */}
            <div className="w-full text-center py-4">
              <a href="/pusb/pusb-about">
                <button className="border border-gray-700 px-8 py-1.5 rounded-xl group hover:scale-110 transition-all duration-300">
                  <div className="flex justify-around items-center gap-4">
                    <h2>Vision & Mission</h2>
                    <AiFillCaretRight className="group-hover:translate-x-4 duration-500 transition-all" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroCabinetSection;
