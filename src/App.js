import React, { useRef } from "react";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Tab from "./components/pages/Tab";
import Logocarousel from "./components/pages/Logocarousel";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import SrollTop from "./components/pages/SrollTop";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "education":
        educationRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={educationRef}>
        <Tab />
      </div>
      <div ref={projectsRef}>
        <Logocarousel />
        <Project />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      <SrollTop />
    </div>
  );
};

export default App;
