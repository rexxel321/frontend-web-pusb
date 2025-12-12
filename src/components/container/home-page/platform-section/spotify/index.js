import React from "react";

const HomeSpotifyPlatformSection = () => {
  return (
    <section className="w-full lg:flex justify-center items-center flex-row-reverse bg-gray-900 px-8 lg:px-16 pt-6">
      <div className="w-full relative text-center p-4 lg:p-0 lg:-mt-8">
        <div className="w-full text-left lg:px-16 px-4">
          <h2 className="text-3xl font-extrabold lg:text-5xl">PUSB on</h2>
        </div>
        <h2 className="text-5xl font-extrabold italic lg:text-7xl lg:-mt-2">Spotify!</h2>
      </div>

      <div className="w-full flex justify-center items-center h-64">
        <iframe
          src="https://open.spotify.com/embed/episode/5mUvYRzm6Rv9A5yvN0RjpA?utm_source=generator"
          className="w-full h-full"
          title="A Spotify podcast"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default HomeSpotifyPlatformSection;
