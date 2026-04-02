import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolio";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Experience", to: "#experience" },
    { name: "Skills", to: "#skills" },
    { name: "Projects", to: "#projects" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={`w-full transition-all duration-300 
        ${scrolled ? "backdrop-blur-md bg-black/20 shadow-lg" : "bg-transparent"} 
        px-6 py-4 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
            <span className="text-black font-bold">A</span>
          </div>
          Arulsiva.
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 bg-black/30 px-8 py-3 rounded-full">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={{ pathname: "/", hash: item.to }}
                className="text-gray-300 hover:text-accent font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href={personalInfo.resumeUrl} 
            target="_blank"
            className="bg-gradient-to-r from-green-400 to-lime-400 text-primary2 font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[90px] w-[90%] max-w-sm bg-black/80 backdrop-blur-md rounded-2xl p-6 lg:hidden shadow-xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={{ pathname: "/", hash: item.to }}
              className="block py-3 text-gray-300 hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/cv.pdf"
            className="block mt-4 text-center bg-gradient-to-r from-green-400 to-lime-400 text-primary2 font-semibold py-3 rounded-full"
          >
            Download CV
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
