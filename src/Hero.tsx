// Hero.tsx

import { useEffect, useState } from "react";
import "./hero.css";

function Hero() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isMobile = screenWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`hero-container ${isMobile ? "hero-responsive" : ""}`}>
      <img
        className="hero-img"
        src={"thisphoto.png"}
        alt={"banner"}
        style={{ width: isMobile ? "100%" : `${screenWidth}px` }}
      ></img>
      <h1 className="hero-title">APPLETON BIKE TOURS</h1>
      <h2 className="hero-subtitle">
        CYCLE THROUGH APPLETON'S CHARM AND SCENIC ROUTES.
      </h2>
      <button className="hero-btn">LET'S RIDE.</button>
    </div>
  );
}

export default Hero;
