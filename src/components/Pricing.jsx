import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  // Function to handle smooth scrolling to a section by ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 6000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HEAL_YEARLY",  // Note: This looks like a typo; consider changing to "HALF_YEARLY" or similar for clarity
      price: 12000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 22000,
      length: 12,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <h1>PRO 22 FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipment
                </p>
                <p>
                  <Check /> All Day Fre Training  {/* Note: "Fre" might be a typo; consider "Free" */}
                </p>
                <p>
                  <Check /> Free Restroom
                </p>
                <p>
                  <Check /> 24/7 Skilled Support
                </p>
                <p>
                  <Check /> 20 Days Freezing Option  {/* Note: "Freezing" might mean "Freezing" as in pausing membership */}
                </p>
                <Link 
                  to="/" 
                  aria-label="Join now and scroll to contact section" 
                  onClick={(e) => {
                    e.preventDefault();  // Prevent navigation to "/"
                    scrollToSection("contact");  // Scroll to Contact section
                  }}
                >
                  Join Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
