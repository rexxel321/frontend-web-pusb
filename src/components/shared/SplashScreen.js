import React, { useEffect } from "react";
import anime from "animejs";

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml10 .letters");
    if (textWrapper) {
      textWrapper.innerHTML =
        textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        ) || "";

      anime
        .timeline({ loop: false })
        .add({
          targets: ".ml10 .letter",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 150,
          delay: (el, i) => 150 * (i + 1),
        })
        .add({
          complete: () => {
            finishLoading(); 
          },
        });
    }
  }, [finishLoading]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <h1 className="ml10 text-center text-8xl font-bold">
        <span className="letters">PUSB 2025</span>
      </h1>
    </div>
  );
};

export default SplashScreen;
