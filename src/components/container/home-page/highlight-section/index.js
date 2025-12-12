"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import CardHighlight from "../../../cards/CardHighlight/index";
import { eventsHighlightPUSB } from "../../../../lib/data";

const animation = { duration: 100000, easing: (t) => t };

const HomeHighlightSection = () => {
  const sliderRef = useRef(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    if (!isLoading && sliderRef.current) {
      const newKeenSlider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
        created(s) {
          s.moveToIdx(5, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
      });

      return () => {
        newKeenSlider.destroy();
      };
    }
  }, [isLoading]); // Add isLoading as a dependency

  return (
    <section className="w-full min-h-[80vh] lg:flex lg:flex-col justify-center items-center gap-8 py-8">
      <div className="w-full text-center lg:text-left">
        <h2 className="text-4xl font-bold lg:text-5xl px-4 lg:px-16">
          <span className="italic"> 2025 </span> EVENTS
        </h2>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full mt-8 lg:mt-0 lg:py-4 lg:px-24 px-8">
          <div ref={sliderRef} className="keen-slider">
            {eventsHighlightPUSB.map((event, index) => (
              <div className="keen-slider__slide" key={index}>
                <CardHighlight {...event} index={index} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeHighlightSection;
