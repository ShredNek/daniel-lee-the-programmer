import React, { useRef, useEffect } from "react";
import PortfolioVisualiser from "../assets/media/ProgrammerPortfolioVisualiser.mp4";

export default function HeroSection({ elementHeight }: any) {
  const heroRef = useRef<HTMLDivElement>(null);
  let thisElementsHeight = () => heroRef.current?.clientHeight;
  useEffect(() => {
    elementHeight(thisElementsHeight());
  }, []);
  let handleResize = () => elementHeight(thisElementsHeight());
  window.addEventListener("resize", handleResize);

  return (
    <section ref={heroRef} className="hero">
      <div className="overlay">
        <div className="text ">
          <h1 className="typewriter">I am Daniel Lee.</h1>
          <h2 className="fade-in">Your friendly neighborhood programmer.</h2>
        </div>
      </div>
      <video
        src={PortfolioVisualiser}
        typeof="video/mp4"
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
}
