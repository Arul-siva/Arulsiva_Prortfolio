import React from "react";
import profile from "../image/my profile pic.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const Home = () => {
  return (
   <>
    <section className="home-section py-5 mt-5">
      <div className="container ">
        <div className="row align-items-center mx-lg-5 mx-md-4 mx-3">
          <div className="col-md-6 col-12 ">
            <div className="">
              <h5 className="text-muted">WELCOME TO MY WORLD</h5>
              <h1>
                Hi, I'm
                <span className="">Dashboard</span>
                , a{' '}              <span className="">Developer</span>.
              </h1>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and guiding through each interaction.
              </p>
              <button className="shadow-box p-3">Dashboard </button>
            </div>
            <p className="mt-lg-5 mt-3">Find with me </p>
            <div className="">
              <FaLinkedinIn className='social-icon mx-2' />
           <IoLogoGithub className='social-icon mx-2' />
           <IoIosMail className='social-icon mx-2' />
            </div>
          </div>
          <div className="col-md-6 col-12 mt-4 text-center text-md-end ">
            <div className="thumbline"></div>
            <img
              src={profile}
              width="600px"
              alt="Profile"
              className="img-fluid  img-thumbnail"
            />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>

   </>
  );
};

export default Home;
