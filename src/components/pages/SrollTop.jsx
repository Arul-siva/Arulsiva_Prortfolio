import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const SrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const SrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={SrollTop}
    
    >
      <FaArrowUp />
    </div>
  );
};

export default SrollTop;
