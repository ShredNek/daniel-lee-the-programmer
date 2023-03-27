import { createContext, useState, useRef, useEffect } from "react";
import "../styles.scss";
import HeroSection from "./HeroSection";
import About from "./About";
import Nav from "./Nav";
import Slider from "./Slider";
import Portfolio from "./Portfolio";

export const NavContext = createContext<string | unknown>(null);

// ? helper function
function sum(...args: number[]) {
  return args.reduce(
    (prevVals: number, newVal: number) => prevVals + newVal,
    0
  );
}

export default function App() {
  // ? Component States
  const [heroSectionHeight, setHeroSectionHeight] = useState<number>(0);
  const [aboutMeSectionHeight, setAboutMeSectionHeight] = useState<number>(0);
  const [portfolioSectionHeight, setPortfolioSectionHeight] =
    useState<number>(0);
  const [sliderPercent, setSliderPercent] = useState<string>("0%");

  // ? Refs
  const globalDomRef = useRef<HTMLDivElement>(null);
  let clientWindowOffsetProgressThroughApp = () =>
    globalDomRef.current
      ? Math.abs(globalDomRef.current!.getBoundingClientRect().y)
      : 0;

  // ? Height of Resolution

  // ? Element height getters
  let heroSectionHeightCall = (val: number) => {
    val !== undefined ? setHeroSectionHeight(val) : 0;
  };
  let aboutMeSectionHeightCall = (val: number) => {
    val !== undefined ? setAboutMeSectionHeight(val) : 0;
  };
  let portfolioSectionHeightCall = (val: number) => {
    val !== undefined ? setPortfolioSectionHeight(val) : 0;
  };

  // ? Pre-mount variables
  const allComponents = [
    heroSectionHeight,
    aboutMeSectionHeight,
    portfolioSectionHeight,
  ];

  let spaTotalHeight = () => sum(...allComponents);

  let resolution = () => Math.abs(window.innerHeight);

  useEffect(() => {
    spaTotalHeight();
  }, [...allComponents]);

  // ? Wheel Function
  function handleWheelCapture() {
    // ? Context Setter
    if (clientWindowOffsetProgressThroughApp() < aboutMeSectionHeight!)
      setContext("Home");
    if (clientWindowOffsetProgressThroughApp() > aboutMeSectionHeight!)
      setContext("About Me");

    setSliderPercent(
      progressBarPercent(
        spaTotalHeight,
        resolution,
        clientWindowOffsetProgressThroughApp
      )
    );
  }
  // ? Progress Bar Percentage
  let progressBarPercent = (
    appH: () => number,
    res: () => number,
    userWindowProgress: () => number
  ) => {
    return `${Math.round((userWindowProgress() / (appH() - res())) * 100)}%`;
  };

  const [context, setContext] = useState("");
  return (
    <main ref={globalDomRef} onWheelCapture={handleWheelCapture}>
      <NavContext.Provider value={[context, setContext]}>
        <Slider percentage={sliderPercent} />
        <HeroSection elementHeight={heroSectionHeightCall} />
        <Nav />
        <About elementHeight={aboutMeSectionHeightCall} />
        <Portfolio elementHeight={portfolioSectionHeightCall} />
      </NavContext.Provider>
    </main>
  );
}
