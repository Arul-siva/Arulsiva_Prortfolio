import React from "react";
import profile from "../image/webdev.jpg";

const About = () => {
  return (
    <>
      <div  className="section home-section py-5 ">
        <div className="container-fluid">
          <div className="row align-items-center py-lg-5 py-md-3 py-3">
            <div className="col-lg-5 col-md-12 col-12 text-center profile_img">
              <img src={profile} alt="" className='img-fluid w-75 img-thumbnail' />
            </div>
            <div className="col-lg-7 col-md-12 col-12 ">
              <div className="shadow-box p-lg-5 p-md-3 p-2 mt-3 mx-5 mb-sm-5 mb-md-3 ">
                <h2>Dashboard Development</h2>
                <p>loading ...</p>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit asperiores consequatur sed laudantium laboriosam
                  incidunt, delectus veniam repudiandae? Ratione voluptatum
                  sapiente beatae aut commodi dolorem culpa dolor doloremque at
                  amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
