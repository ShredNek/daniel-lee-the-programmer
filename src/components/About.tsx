import DanImage from "../assets/media/DanStands_V2.jpg";

const getCurrYear = () => {
  return new Date().getFullYear();
};

const getCurrExperience = () => {
  const theYearItBegan = 2021;
  return getCurrYear() - theYearItBegan;
};

export default function About() {
  return (
    <section className="wipes-nav about-me">
      <div>
        <div className="img-overlay"></div>
        <img src={DanImage}></img>
      </div>
      <div className="bio">
        <h1>
          Who am <span>I?</span>
        </h1>
        <h2>
          I am a passionate, dedicated, and zealous web designer. I specialise
          in UX/UI design and working with front-end frameworks, such as React,
          TypeScript, Scss, and many other tools.
        </h2>
        <br />
        <h2>
          I am no stranger to back-end projects either, as I have complete
          numerous projects involving the processing of data from controllers
          and then performing CRUD operations, for example.
        </h2>
        <br />
        <h2>
          As of {getCurrYear()}, I have had {getCurrExperience()} years of
          experience as a developer. Please see my portfolio below to view all
          of my work.
        </h2>
      </div>
    </section>
  );
}
