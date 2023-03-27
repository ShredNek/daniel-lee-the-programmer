import { useRef, useEffect } from "react";

export default function Portfolio({ elementHeight }: any) {
  const portfolioRef = useRef<HTMLDivElement>(null);
  let thisElementsHeight = () => portfolioRef.current?.clientHeight;
  useEffect(() => {
    elementHeight(thisElementsHeight());
  }, []);
  let handleResize = () => elementHeight(thisElementsHeight());
  window.addEventListener("resize", handleResize);

  return (
    <section ref={portfolioRef} className="portfolio">
      <h1>Project Portfolio</h1>
      <div className="grid-container">
        <div className="showcase">showcase</div>
        <div className="sub-showcase-1">sub-showcase-1</div>
        <div className="sub-showcase-2">sub-showcase-2</div>
        <div className="mini-1">mini-1</div>
        <div className="subtitle">subtitle</div>
        <div className="mini-2">mini-2</div>
        <div className="mini-3">mini-3</div>
        <div className="mini-4">mini-4</div>
        <div className="mini-5">mini-5</div>
      </div>
    </section>
  );
}
