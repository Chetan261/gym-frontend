import React from "react";

const Hero = () => {
  // Function to handle smooth scrolling to a section by ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button 
            aria-label="Start your fitness journey and scroll to contact section" 
            onClick={() => scrollToSection("contact")}
          >
            Start Your Journey
          </button>
          <button 
            aria-label="Discover your personalized plan and scroll to pricing section" 
            onClick={() => scrollToSection("pricing")}
          >
            Discover Your Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;