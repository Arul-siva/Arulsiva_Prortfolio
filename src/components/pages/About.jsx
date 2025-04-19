import React from "react";
import profile from "../image/webdev.jpg";

const About = () => {
  return (
    <div className="section home-section py-4 bg-black text-white">
      <div className="container">
        <div className="row align-items-center py-lg-5 py-md-3 py-3">
          <div className="col-lg-5 col-md-12 col-12 text-center profile_img mb-4">
            <img
              src={profile}
              alt="Profile"
              className="img-fluid w-75 rounded-3 shadow-lg"
            />
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="boxshadow_c9f31d about_sec p-lg-5 p-md-3 p-3 mt-3 mb-5 border_c9f31d rounded-4 bg-dark">
              <h2 className="mb-4 text-warning">About Me</h2>
              <p>
                <strong>My Journey from BPO to Web Development: Finding My True Passion</strong>
              </p>
              <hr className="border-warning" />
              <p>
                My career began right after college when I landed a job in a <strong>BPO</strong> through campus placement.
                While it was a great start, I quickly realized it wasn’t the path I was passionate about.
              </p>
              <p>
                Seeking a more creative and technical challenge, I switched gears and enrolled in a <strong>full-stack development</strong> course.
                This leap into the unknown became a turning point — I discovered coding and instantly clicked with it.
              </p>
              <p>
                The joy of solving problems, building websites, and bringing ideas to life led me to join <strong>HEPL</strong> as a web developer, kick-starting my tech career.
              </p>
              <p>
                Today, I continue pushing limits, crafting <strong>responsive websites</strong> and delivering <strong>innovative solutions</strong>.
                My journey proves one thing: <em>it's never too late to discover your passion and turn it into something amazing.</em>
              </p>
              <div className="mt-4 text-center">
                <em className="text-success">"Code your dreams into reality."</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
