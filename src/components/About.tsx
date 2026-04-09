import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import GradientText from "./GradientText";

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center group"
          >
            <div className="relative w-[360px] h-[360px] lg:w-[460px] lg:h-[460px]">
              <div
                className="absolute inset-0 rounded-full border border-accent/40 border-dashed animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>

              <div
                className="absolute inset-4 rounded-full border-[1px] bg-accentclient animate-spin"
                style={{ animationDuration: "20s", animationDirection: "reverse" }}
              ></div>

              <div className="absolute inset-6 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <img
                  src={personalInfo.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                />
              </div>

              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                <span className="absolute top-6 left-16 w-3 h-3 bg-accent rounded-full"></span>
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "20s", animationDirection: "reverse" }}
              >
                <span className="absolute bottom-10 right-20 w-2.5 h-2.5 bg-teal-400 rounded-full"></span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="uppercase tracking-widest text-sm text-accent font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              <GradientText text=" Who is Arulsiva" />?
            </h2>

            <div className="relative pl-6 mb-10">
              <span className="absolute left-0 top-1 w-[3px] h-full bg-accent"></span>
              <p className="text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed">
                Delivering fast, intuitive digital experiences with a focus on speed and design.
              </p>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed mb-12">
              <p>
                I'm a software engineer who creates dependable solutions with clear
                structure and practical implementation. I enjoy solving technical
                problems and contributing to stable, efficient, and intuitive
                products.
              </p>
            </div>

            <div className="space-y-6 mb-14">
              <div className="d-flex">
                <div className="flex items-center gap-3 text-accent mb-1">
                  <div className="elementor-icon-box-icon">
                    <a
                      href="mailto:arulsivajayabal@gmail.com"
                      className="elementor-icon"
                      aria-label="Email Us At"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M35.7144 5H4.28585C2.7079 5 1.42871 6.27919 1.42871 7.85714V32.1429C1.42871 33.7208 2.7079 35 4.28585 35H35.7144C37.2924 35 38.5716 33.7208 38.5716 32.1429V7.85714C38.5716 6.27919 37.2924 5 35.7144 5Z"
                          stroke="url(#paint0_linear_362_3352)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M1.42871 8.57153L18.1716 22.8572C18.685 23.2849 19.332 23.519 20.0001 23.519C20.6683 23.519 21.3153 23.2849 21.8287 22.8572L38.5716 8.57153"
                          stroke="url(#paint1_linear_362_3352)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_362_3352"
                            x1="38.5621"
                            y1="5.02022"
                            x2="-3.86113"
                            y2="19.5426"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F0FF6C"></stop>
                            <stop offset="1" stopColor="#6BFDD9"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_362_3352"
                            x1="38.5621"
                            y1="8.58161"
                            x2="6.36544"
                            y2="30.7022"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F0FF6C"></stop>
                            <stop offset="1" stopColor="#6BFDD9"></stop>
                          </linearGradient>
                        </defs>
                      </svg>{" "}
                    </a>
                  </div>
                </div>
                <div className="ms-4">
                  <span className="text-white">Email Us At</span>
                  <p className="text-lg font-semibold text-white">{personalInfo.email}</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="flex items-center gap-3 text-accent mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_362_3361)">
                      <path
                        d="M25.0283 37.1429C26.7878 38.278 28.8845 38.7727 30.9658 38.5438C33.0472 38.3148 34.9862 37.3762 36.4569 35.8858L37.7426 34.6286C38.3063 34.0521 38.6219 33.2778 38.6219 32.4715C38.6219 31.6652 38.3063 30.8909 37.7426 30.3143L32.2854 24.9143C31.7137 24.3525 30.9442 24.0376 30.1426 24.0376C29.341 24.0376 28.5715 24.3525 27.9997 24.9143V24.9143C27.4232 25.478 26.6489 25.7936 25.8426 25.7936C25.0363 25.7936 24.262 25.478 23.6854 24.9143L15.114 16.3429C14.8281 16.0611 14.601 15.7253 14.446 15.355C14.291 14.9847 14.2112 14.5872 14.2112 14.1858C14.2112 13.7843 14.291 13.3869 14.446 13.0165C14.601 12.6462 14.8281 12.3104 15.114 12.0286V12.0286C15.6759 11.4569 15.9907 10.6874 15.9907 9.88576C15.9907 9.08416 15.6759 8.31463 15.114 7.74291L9.68545 2.31434C9.1089 1.75066 8.33461 1.43506 7.5283 1.43506C6.72199 1.43506 5.94771 1.75066 5.37116 2.31434L4.11402 3.60005C2.62358 5.07074 1.68497 7.00977 1.45603 9.0911C1.22708 11.1724 1.72176 13.2691 2.85688 15.0286C8.77129 23.745 16.2967 31.251 25.0283 37.1429V37.1429Z"
                        stroke="url(#paint0_linear_362_3361)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_362_3361"
                        x1="38.6124"
                        y1="1.4601"
                        x2="-5.49871"
                        y2="13.6751"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F0FF6C"></stop>
                        <stop offset="1" stopColor="#6BFDD9"></stop>
                      </linearGradient>
                      <clipPath id="clip0_362_3361">
                        <rect width="40" height="40" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="ms-4">
                  <span className="text-white">Phone Number</span>
                  <p className="text-lg font-semibold text-white">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-semibold hover:text-accent transition"
              >
                <Star className="text-accent fill-accent" size={18} />
              </a>

              <div className="bg-secondary2 border border-accent/20 rounded-3xl px-8 py-6 text-center">
                <div className="text-4xl font-bold text-accent mb-1">3</div>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
