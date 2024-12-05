const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="hero-image">
        <h1>Discover the Magic of Cinema</h1>
      </div>
      <div className="content">
        <p>
          Explore the enchanting world of film, where creativity knows no bounds. From breathtaking visuals to unforgettable storytelling, the film industry has captivated audiences for generations. Dive into our interactive timeline and celebrate the milestones that have shaped the industry.
        </p>
        <div className="cta-buttons">
          <a href="#story" className="btn">Watch Our Story</a>
          <a href="#films" className="btn">Explore Films</a>
          <a href="#community" className="btn">Join the Community</a>
        </div>
        <blockquote>
          <p>“The cinema is the most beautiful lie in the world.” – Federico Fellini</p>
        </blockquote>
      </div>
    </section>
  );
};

export default AboutSection;
