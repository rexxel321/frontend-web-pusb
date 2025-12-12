import React, { useRef, useState, useEffect } from "react";
import SplashScreen from "./components/shared/SplashScreen";
import HomeHeroSection from "./components/container/home-page/hero-section";
import HomeHeroCabinetSection from "./components/container/home-page/hero-cabinet";
import HomeMainWorkplanSection from "./components/container/home-page/workplan-section";
import HomeYoutubePlatformSection from "./components/container/home-page/platform-section/youtube";
import HomeSpotifyPlatformSection from "./components/container/home-page/platform-section/spotify";
import HomeInstagramPlatformSection from "./components/container/home-page/platform-section/instagram";
import HomeHighlightSection from "./components/container/home-page/highlight-section";

export default function Home() {
  const element = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Optionally store in localStorage to show the splash only once
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setIsLoading(false);
    } else {
      localStorage.setItem("hasSeenSplash", "true");
    }
  }, []);

  const handleScrollDown = () => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Display splash screen if loading
  if (isLoading) {
    return <SplashScreen finishLoading={() => setIsLoading(false)} />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeHeroSection handleScrollDown={handleScrollDown} />
      <HomeHeroCabinetSection />
      <HomeMainWorkplanSection element={element} />
      <HomeYoutubePlatformSection />
      <HomeHighlightSection />
      <HomeSpotifyPlatformSection />
      <HomeInstagramPlatformSection />
    </main>
  );
}
