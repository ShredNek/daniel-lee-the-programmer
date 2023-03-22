import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Nav from "./components/Nav";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Nav />
    <HeroSection />
    <About />
  </React.StrictMode>
);
