import React from "react";
import profile from "../image/my profile pic.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const text = "Hi, I'm Arulsiva J, a Full-Stack Developer.";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

const Home = () => {
  return (
    <section className="home-section py-5 mt-5">
      <div className="container">
        <div className="row align-items-center mx-lg-4 mx-md-3 mx-3">
          <div className="col-md-6 col-12">
            <div>
              <h5 className="text-white">WELCOME TO MY PAGE</h5>

              <h1 className="c_c9f31d d-flex flex-wrap">
                {"Hi , i'm  ArulsivaJ".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    className={char === " " ? "me-1" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              <h1 className="c_c9f31d d-flex flex-wrap">
                {"Junior Software Engineer.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    className={char === " " ? "me-1" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                I build efficient and responsive web applications with a strong focus on clean code, user experience, and continuous learning.
              </motion.p>

              <a href="Arulsiva-Software Engineer (1).pdf" download>
                <motion.button
                  className="button_bg p-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.button>
              </a>
            </div>

            <p className="mt-lg-5 mt-3 text-white">Find with me</p>
            <div className="Find_with_me d-flex">
              {[{
                icon: <IoIosMail />,
                link: "mailto:arulsivajayabal@email.com"
              }, 
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/arulsiva-jayabal-60b1b531b"
              }, {
                icon: <IoLogoGithub />,
                link: "https://github.com/Arul-siva"
              }].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon mx-2 text-decoration-none"
                  style={{ color: "#c9f31d", fontSize: "1.5rem" }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-12 mt-4 text-center text-md-end">
            <div className="thumbline"></div>
            <motion.img
              src={profile}
              width="600px"
              alt="Profile"
              className="img-fluid img-thumbnail"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
