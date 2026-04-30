import React from "react";
import CardHighlightContainer from "./_components/CardHighlightContainer";
import CardHighlightContainer2026 from "./_components/CardHighlightContainer2026";
import CardHighlightContainer2024 from "./_components/CardHighlightContainer2024";

const Page = () => {

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      {/* Header Section */}
      <section className="w-full text-center pt-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          PUSB Events
        </h1>
        <h3 className="text-lg text-center mt-8 mb-4">
          This PUSB Events page provides a schedule of various activities,
          including workshops, seminars, events, and more — opportunities to
          learn, connect, and grow.
        </h3>
      </section>

      {/* 2026 Highlights Section */}
      <section className="w-full min-h-[60vh] lg:flex lg:flex-col justify-center items-center gap-8 py-8">
        <div className="w-full">
          <h2 className="text-4xl font-bold lg:text-5xl mb-4 lg:mb-0">
            <span className="italic">2026</span> EVENTS 
          </h2>
        </div>
        <div className="w-full">
          <div className="keen-slider">
            <div id="keen-slider-2026" className="keen-slider">
              <CardHighlightContainer2026 />
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Highlights Section */}
      <section className="w-full min-h-[60vh] lg:flex lg:flex-col justify-center items-center gap-8 py-8">
        <div className="w-full">
          <h2 className="text-4xl font-bold lg:text-5xl mb-4 lg:mb-0">
            <span className="italic">2025</span> EVENTS 
          </h2>
        </div>
        <div className="w-full">
          <div className="keen-slider">
            <div id="keen-slider" className="keen-slider">
              <CardHighlightContainer />
            </div>
          </div>
        </div>
      </section>

      {/* 2024 Highlights Section */}
      <section className="w-full min-h-[60vh] lg:flex lg:flex-col justify-center items-center gap-8 py-8">
        <div className="w-full">
          <h2 className="text-4xl font-bold lg:text-5xl mb-4 lg:mb-0">
            <span className="italic">2024</span> EVENTS 
          </h2>
        </div>
        <div className="w-full">
          <div className="keen-slider">
            <div id="keen-slider-2024" className="keen-slider">
              <CardHighlightContainer2024 />
            </div>
          </div>
        </div>
      </section>


      {/* See All Events Link */}
      <section className="w-full flex justify-center mt-8">
        <a href="/pusb-event/all">
          <p className="text-blue-400 hover:bg-white py-2 px-4 rounded-lg font-medium text-base hover:text-blue-800 transition-all duration-300">
            See All Events
          </p>
        </a>
      </section>
    </main>
  );
};

export default Page;
