import { useEffect, useState } from "react";
import "./hero-two.css";

function HeroTwo() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <>
      <div className="hero-two-container">
        <h1 className="hero-two-title">
          {" "}
          Unveil Appleton's Wonders by Bicycle.
        </h1>

        <h2 className="hero-two-subtitle">
          We are passionate about providing you with the ultimate cycling
          experience in the charming city of Appleton. Appleton is a hidden gem
          that boasts a unique blend of rich history, world-renowned breweries
          and bars, and an extensive network of scenic trails amidst the
          picturesque landscapes nestled around the Fox River.
        </h2>
      </div>
      <div className="segway-container">
        <img
          className="hero-two-img"
          src={"appleton.png"}
          alt={"appleton"}
          style={{ width: `${screenWidth}px` }}
        ></img>
        <button className="tour-btn"> Schedule Your Tour</button>
        <h3 className="or-title">or pick from one below</h3>

        <img
          className="tour-one"
          src={"close-up-man-riding-his-bicycle.jpg"}
          alt={"tour one"}
        ></img>
        <h3 className="tour-one-summary">Along the Fox-River</h3>
        <button className="learn-btn">Learn More</button>
        <button className="book-btn">Book Now</button>

        <img
          className="tour-two"
          src={"tour-two.jpg"}
          width={400}
          height={350}
          alt={"tour two"}
        ></img>
        <h3 className="tour-two-summary">Appleton Beer Tour</h3>
        <button className="learn-btn-two">Learn More</button>
        <button className="book-btn-two">Book Now</button>
      </div>
    </>
  );
}

export default HeroTwo;
