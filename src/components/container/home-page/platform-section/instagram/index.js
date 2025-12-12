import React, { useEffect } from "react";

const HomeInstagramPlatformSection = () => {
  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    if (window.instgrm) {
      processEmbeds();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full lg:flex justify-center items-center bg-gray-900 px-8 lg:px-16 py-8">
      <div className="w-full relative text-center p-4 lg:p-0">
        <div className="w-full text-left px-4 lg:px-16">
          <h2 className="text-3xl font-extrabold lg:text-5xl">The Presunivers on</h2>
        </div>
        <h2 className="text-5xl font-extrabold italic lg:text-7xl lg:-mt-2">Instagram!</h2>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-sm">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DME2EqDvAhX/?igsh=bGM1bTNxMmVjNTNw"
            data-instgrm-version="12"
            style={{ width: "100%", minHeight: "400px" }} 
          ></blockquote>
        </div>
      </div>
    </section>
  );
};

export default HomeInstagramPlatformSection;
