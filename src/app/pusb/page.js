"use client";
import React, { useRef } from "react";
import HomeHeroSection from "../../components/container/home-page/hero-section/index";
import HomeHeroCabinetSection from "../../components/container/home-page/hero-cabinet/index";
import HomeMainWorkplanSection from "../../components/container/home-page/workplan-section/index";
import HomeYoutubePlatformSection from "../../components/container/home-page/platform-section/youtube/index";
import HomeSpotifyPlatformSection from "../../components/container/home-page/platform-section/spotify/index";
import HomeInstagramPlatformSection from "../../components/container/home-page/platform-section/instagram/index";
import HomeHighlightSection from "../../components/container/home-page/highlight-section/index";
export default function Home() {
  const element = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
