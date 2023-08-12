// Nav.tsx

import "./nav.css";
import { useState, useEffect } from "react";

function Nav() {
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className={`nav-container ${isMobile ? "nav-responsive" : ""}`}>
      <div className="logo-container">
        <img
          className={`logo ${isMobile ? "logo-mobile" : ""}`}
          src={"public/bike-logo-2-removebg-preview (1).png"}
          alt={"bike-logo"}
          onClick={() => {}}
        />
      </div>
      <button
        className={`nav-btn ${activeTab === "HOME" ? "active" : ""}`}
        onClick={() => handleButtonClick("HOME")}
      >
        HOME
      </button>
      <button
        className={`nav-btn ${activeTab === "ABOUT" ? "active" : ""}`}
        onClick={() => handleButtonClick("ABOUT")}
      >
        ABOUT
      </button>
      <button
        className={`nav-btn ${activeTab === "CONTACT" ? "active" : ""}`}
        onClick={() => handleButtonClick("CONTACT")}
      >
        CONTACT
      </button>
      <button
        className={`nav-btn-book ${activeTab === "BOOK" ? "active" : ""}`}
        onClick={() => handleButtonClick("BOOK")}
      >
        SCHEDULE YOUR TOUR
      </button>
    </div>
  );
}

export default Nav;
