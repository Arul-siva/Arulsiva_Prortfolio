import React from "react";
import Slider from "react-slick";
import reactlogo from "../image/react.svg";
import html from "../image/html.svg";
import css from "../image/css.svg";
import javascipt from "../image/javascript.svg";
import boostrap from "../image/bootstrap.svg";
import figma from "../image/figma.svg";
import mongo from "../image/mongodb.svg";
import mysql from "../image/mysql.svg";
import git from "../image/git.svg";
import php from "../image/PHP-logo.svg.png";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
    // cssEase: "linear",
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      img: html,
      name: "HTML",
    },
    {
      img: css,
      name: "CSS",
    },
    {
      img: boostrap,
      name: "Boostrap",
    },
    {
      img: javascipt,
      name: "Javascipt",
    },
    {
      img: php,
      name: "PHP",
    },
    {
      img: reactlogo,
      name: "React",
    },
    {
      img: mongo,
      name: "Mongo DB",
    },
    {
      img: mysql,
      name: "My Sql",
    },
    {
      img: git,
      name: "Git",
    },
    {
      img: figma,
      name: "Figma",
    },

  ];

  return (
    < >
     <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
        <div className="py-lg-5 py-3 logocarousel home-section">
        <h2 className="text-center py-3">hello </h2>
        <Slider {...settings} className="overflow-hidden">
          {data.map((value, index) => (
            <div className="logo-card " key={index}>
              <div className=" logo-img d-flex align-items-center justify-content-center ">
                <img src={value.img} className="img-fluid " alt="" />
              </div>
              <p className="text-center m-0">{value.name}</p>
            </div>
          ))}
        </Slider>
         </div>
        </div>
      </div>
     </div>
    </>
  );
}
