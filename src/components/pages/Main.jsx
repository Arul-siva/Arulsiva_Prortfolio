import React from "react";
import Home from "./Home";
import About from "./About";
import Tab from "./Tab";
import Logocarousel from './Logocarousel';
import Project from "./Project";
import { ThemeProvider } from "./pages/ThemeContext";
import Contact from "./Contact";
import SrollTop from "./SrollTop";
const Main =()=>{
return(
    <ThemeProvider>
      <Header />
      <main>
        <Home />
        <About />
        <Tab />
        <Logocarousel />
        <Project />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
)
};
export default Main 