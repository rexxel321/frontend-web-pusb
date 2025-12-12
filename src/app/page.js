import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import SplashScreen from "../components/shared/SplashScreen"; 

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const lastSplashTime = localStorage.getItem("lastSplashTime");
    const currentTime = Date.now();
    const twoMinutes = 2 * 60 * 1000;

    if (lastSplashTime && currentTime - parseInt(lastSplashTime) < twoMinutes) {
      setLoading(false);
      navigate("/pusb"); 
    } else {
      setLoading(true);
      setSplash(true);
    }
  }, [navigate]);

  const finishLoading = () => {
    localStorage.setItem("lastSplashTime", Date.now().toString());
    setLoading(false);
    setSplash(false);
  };

  return (
    <div>
      {loading && splash && <SplashScreen finishLoading={finishLoading} />}
    </div>
  );
}
