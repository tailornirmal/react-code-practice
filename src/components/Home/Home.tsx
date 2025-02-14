import "./Home.css";
const Home = () => {
  return (
    <div>
      <main>
        <section className="homesection">
          <div>Welcome, UI Developers.</div>
          <p>
            Purpose of this app to demonstrate coding and interview excercise
            related to React JS, Redux, Javascript, HTML, CSS and other UI Tech
            stack.
          </p>
          <div className="tech-wrapper">
            <div className="tech">React</div>
            <div className="tech">Javascript</div>
            <div className="tech">Typescript</div>
            <div className="tech">HTML</div>
            <div className="tech">CSS</div>
            <div className="tech">Redux</div>
            <div className="tech">API</div>
            <div className="tech">Next JS</div>
          </div>
          <div className="tech-wrapper">
            <div className="tech">Jest</div>
            <div className="tech">React Testing Library</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
