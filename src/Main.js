import React, { useState, useEffect } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import SplashScreen from "./components/shared/SplashScreen";

export default function Main({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setIsLoading(false);
    } else {
      localStorage.setItem("hasSeenSplash", "true");
    }
  }, []);

  if (isLoading) {
    return <SplashScreen finishLoading={() => setIsLoading(false)} />;
  }

  return (
    <div>
      <Header />
      <main className="scroll-smooth">{children}</main>
      <Footer />
    </div>
  );
}
