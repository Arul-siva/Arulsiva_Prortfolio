import React from "react";
import hepl from "../image/hepl.png";
import tie from "../image/tiechennai.png";
import fruit from "../image/fruiting.png";
import foshan from "../image/foshan.png";
import { Image } from "antd";
import { GoArrowUpRight } from "react-icons/go";

const Project = () => {
    return (
        <div>
            <div class="page-wrapper ">
                <div class="section-timeline b_c9f31d">
                    {/* <div class="overlay-fade-top"></div> */}
                    <div class="container">
                        <h2 className="text-center py-4 fs_51 text-white">Project </h2>

                        <div class="timeline_component">
                            <div class="timeline_progress">
                                <div data-w-id="d5abcf1f-3370-3eea-ccfd-66f076babfdd" class="timeline_progress-bar rounded-4 shadow-sm" ></div>
                            </div>
                            <div
                                data-w-id="d5abcf1f-3370-3eea-ccfd-66f076babfe0"
                                class="timeline_item">
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe1-8b0ae424"
                                    class="timeline_left" >
                                    <div class="timeline_date-text c_c9f31d">HEPL</div>
                                </div>
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe4-8b0ae424"
                                    class="timeline_centre" >
                                    <div class="timeline_circle"></div>
                                </div>
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe6-8b0ae424"
                                    className="timeline_right p-lg-4 p-md-3 p-3 rounded-4 shadow-sm bg-dark text-white"
                                >
                                    <div className="mb-4">
                                        <p className="text-justify">
                                            Developed a responsive website using <strong>HTML, CSS, JavaScript, Bootstrap, and PHP</strong> for HEPL, a business solutions provider.
                                            Integrated <strong>live streaming functionality</strong> for real-time event monitoring and incorporated interactive animations to enhance the user experience.
                                            
                                        </p>
                                    </div>

                                    <div className="timeline_image-wrapper mt-4 d-flex justify-content-center">
                                        <Image
                                            src={hepl}
                                            className="img-fluid rounded-4 shadow-lg hover-scale"
                                            alt="HEPL Project Preview"
                                        />
                                    </div>

                                    <p className="mt-4 fs-5">
                                        <a
                                            href="https://hepl.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fw-bold text-c9f31d text-decoration-none d-inline-flex align-items-center project-link"
                                        >
                                            LIVE LINK <GoArrowUpRight className="ms-2" />
                                        </a>
                                    </p>
                                </div>

                            </div>
                            <div
                                data-w-id="d5abcf1f-3370-3eea-ccfd-66f076babfe0"
                                class="timeline_item">
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe1-8b0ae424"
                                    class="timeline_left" >
                                    <div class="timeline_date-text">Fruiting Desert</div>
                                </div>
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe4-8b0ae424"
                                    class="timeline_centre" >
                                    <div class="timeline_circle"></div>
                                </div>
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe6-8b0ae424"
                                    className="timeline_right p-lg-4 p-md-3 p-3 rounded-4 shadow-sm bg-dark text-white"
                                >
                                    <div className="mb-4">
                                        <p className="text-justify lh-lg">
                                            Developed a <strong>fruit-selling e-commerce platform</strong> with a responsive frontend using <strong>HTML, CSS, Bootstrap, JavaScript, and React</strong>.
                                            Built a robust backend using <strong>Node.js</strong> and <strong>MongoDB</strong> for smooth data management and efficient API communication.
                                            Implemented an <strong>intuitive admin dashboard</strong> featuring CRUD operations for easy product management.
                                            Enhanced user engagement by adding a <strong>review and rating system</strong>, allowing customers to provide feedback and rate products directly on the platform.
                                        </p>
                                    </div>

                                    <div className="timeline_image-wrapper mt-4 d-flex justify-content-center">
                                        <Image
                                            src={fruit}
                                            className="img-fluid rounded-4 shadow-lg hover-scale"
                                            alt="Fruiting Desert Project Preview"
                                        />
                                    </div>

                                    <p className="mt-4 fs-5">
                                        <a
                                            href="https://fruitingdesert.netlify.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fw-bold text-c9f31d text-decoration-none d-inline-flex align-items-center project-link"
                                        >
                                            LIVE LINK <GoArrowUpRight className="ms-2" />
                                        </a>
                                    </p>
                                </div>

                            </div>
                            {/* <div
                                data-w-id="d5abcf1f-3370-3eea-ccfd-66f076babfe0"
                                class="timeline_item">
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe1-8b0ae424"
                                    class="timeline_left" >
                                    <div class="timeline_date-text">Tie Chennai</div>
                                </div>
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe4-8b0ae424"
                                    class="timeline_centre" >
                                    <div class="timeline_circle"></div>
                                </div>
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe6-8b0ae424"
                                    className="timeline_right p-lg-4 p-md-3 p-3 rounded-4 shadow-sm bg-dark text-white"
                                >
                                    <div className="mb-4">
                                        <p className="text-justify lh-lg">
                                            Developed and maintained the official website for <strong>TiE Chennai</strong>, a chapter of the global non-profit organization fostering entrepreneurship.
                                            Built a scalable platform to support <strong>mentoring, networking, and educational initiatives</strong>, tailored for both seasoned and aspiring entrepreneurs.
                                            Prioritized <strong>responsiveness</strong> to ensure seamless accessibility across all devices.
                                        </p>
                                    </div>

                                    <div className="timeline_image-wrapper mt-4 d-flex justify-content-center">
                                        <Image
                                            src={tie}
                                            className="img-fluid rounded-4 shadow-lg hover-scale"
                                            alt="TiE Chennai Project Preview"
                                        />
                                    </div>

                                    <p className="mt-4 fs-5">
                                        <a
                                            href="https://chennai.tie.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fw-bold text-c9f31d text-decoration-none d-inline-flex align-items-center project-link"
                                        >
                                            LIVE LINK <GoArrowUpRight className="ms-2" />
                                        </a>
                                    </p>
                                </div>

                            </div>
                            <div
                                data-w-id="d5abcf1f-3370-3eea-ccfd-66f076babfe0"
                                class="timeline_item">
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe1-8b0ae424"
                                    class="timeline_left" >
                                    <div class="timeline_date-text">Foshan</div>
                                </div>
                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe4-8b0ae424"
                                    class="timeline_centre" >
                                    <div class="timeline_circle"></div>
                                </div>


                                <div
                                    id="w-node-d5abcf1f-3370-3eea-ccfd-66f076babfe6-8b0ae424"
                                    className="timeline_right p-lg-4 p-md-3 p-3 rounded-4 shadow-sm bg-dark text-white"
                                >
                                    <div className="mb-4">
                                        <p className="text-justify lh-lg">
                                            Created a visually appealing, user-friendly static website for <strong>Foshan Infrastructure Pvt Ltd</strong>, tailored to meet the specific needs of the construction industry.
                                            Developed the site using <strong>WordPress, Elementor Pro, and WP Forms</strong>, streamlining design and functionality without heavy custom coding.
                                            Implemented <strong>cross-browser compatibility</strong> and ensured full <strong>mobile responsiveness</strong> for seamless performance across all devices.
                                        </p>
                                    </div>

                                    <div className="timeline_image-wrapper mt-4 d-flex justify-content-center">
                                        <Image
                                            src={foshan}
                                            className="img-fluid rounded-4 shadow-lg hover-scale"
                                            alt="foshan Project Preview"
                                        />
                                    </div>

                                    <p className="mt-4 fs-5">
                                        <a
                                            href="https://foshan.co.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fw-bold text-c9f31d text-decoration-none d-inline-flex align-items-center project-link"
                                        >
                                            LIVE LINK <GoArrowUpRight className="ms-2" />
                                        </a>
                                    </p>
                                </div>


                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
