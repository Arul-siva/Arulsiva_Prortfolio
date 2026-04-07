import { Briefcase, Code, GraduationCap, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import golftripzImage from '../../images/golftripz.png';
import lsm from '../../images/lms.png';
import fruitingImage from '../../images/fruiting.png';
import resumePdf from '../../images/Arulsiva - Software Engineer..pdf';
export const personalInfo = {
  name: "Arulsiva",
  role: "Software Engineer",
  intro: "I’m a software engineer specializing in building scalable, high-performance web applications across the frontend and backend. I focus on writing clean, maintainable code and developing solutions that solve real-world problems.",
  resumeUrl: resumePdf,
  profileImage: "https://arulsiva-prortfolio.vercel.app/static/media/my%20profile%20pic.64077449059229659831.jpg",
  heroImage: "https://arulsiva-prortfolio.vercel.app/static/media/webdev.04a6f1c02f44d7f4b435.jpg",
  email: "arulsivajayabal@gmail.com",
  phone: "8098185278",
  location: "Cuddalore",
  socials: {
    github: "https://github.com/", 
    linkedin: "https://linkedin.com/",
  }
};

export const about = {
  title: "Software Engineer",
  description: [
    "I am a Software Engineer with experience in building large-scale web applications and responsive websites. My expertise spans across full-stack development using React, Laravel, Node.js, and PHP.",
    "I have a proven track record of optimizing performance, improving UI stability, and delivering high-quality projects on time. I am passionate about solving complex problems and creating efficient, scalable solutions."
  ],
  quote: "Code your dreams into reality."
};

export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Distributed Software Solutions Pte Ltd, Singapore",
    location: "Remote",
    period: "08/2025 - Present",
    description: [
      "Worked on 3+ large-scale web applications, including hotel and golf course booking platforms and EdTech projects.",
      "Developed and maintained applications using Laravel (PHP) for backend services and React with Redux for frontend state management.",
      "Built and enhanced booking workflows handling availability, pricing, reservations, currency conversion, and quiz-based modules for global users.",
      "Used SVN version control for code merging, conflict resolution, and maintaining stable, high-quality codebases."
    ],
    type: "work"
  },
  {
    id: 2,
    role: "Junior Software Engineer",
    company: "HEPL",
    location: "Cuddalore",
    period: "2023 - 2025",
    description: [
      "Developed responsive, high-performance websites using HTML, CSS, JavaScript, React.js, and PHP to deliver user-centric web experiences.",
      "Integrated REST APIs and optimized front-end performance, achieving up to 60% reduction in load time.",
      "Improved UI stability, responsiveness, and speed through DOM manipulation, debugging, and code optimization.",
      "Completed projects across e-commerce, business, and WordPress domains with 90%+ client satisfaction.",
      "Collaborated with team members and clients to gather requirements and deliver high-quality projects on time."
    ],
    type: "work"
  }
];

export const skills = [
  { name: "React.js", level: 90, icon: "https://arulsiva-prortfolio.vercel.app/static/media/react.2b6a071759fcdac074f4dcad26eef347.svg" },
  { name: "Laravel", level: 85, icon: "https://arulsiva-prortfolio.vercel.app/static/media/laravel-2.ba995bd47e3a7cc141cc1c9aaa1ac583.svg" },
  { name: "Node.js", level: 80, icon: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" },
  { name: "PHP", level: 85, icon: "https://arulsiva-prortfolio.vercel.app/static/media/PHP-logo.svg.42409eafdcf3870796b7.png" },
  { name: "MongoDB", level: 75, icon: "https://arulsiva-prortfolio.vercel.app/static/media/mongodb.6c6da70249bd055e32474d63755dd3db.svg" },
  { name: "MySQL", level: 80, icon: "https://arulsiva-prortfolio.vercel.app/static/media/mysql.f9e45d29a8d636bf8f78c9c346b7a7ce.svg" },
  { name: "JavaScript", level: 90, icon: "https://arulsiva-prortfolio.vercel.app/static/media/javascript.e9360603cdd412c8f9acb925313bc3f3.svg" },
  { name: "HTML5", level: 95, icon: "https://arulsiva-prortfolio.vercel.app/static/media/html.6a342d61e4fe710cf3e5c05b65b0ac87.svg" },
  { name: "CSS3", level: 90, icon: "https://arulsiva-prortfolio.vercel.app/static/media/css.43b6f4bdbc0f36b9f2dd15c6ebbcea15.svg" },
  { name: "Bootstrap", level: 85, icon: "https://arulsiva-prortfolio.vercel.app/static/media/bootstrap.19a2d2ff74985cbf49a1aed7fb4d5401.svg" },
  { name: "Git", level: 85, icon: "https://arulsiva-prortfolio.vercel.app/static/media/git.a0b8447eefa4cd939642f1017ee1c962.svg" },
  { name: "Figma", level: 70, icon: "https://arulsiva-prortfolio.vercel.app/static/media/figma.1cd446080336901b93673164fe5bdcf2.svg" }
];

export const projects = [
    {
    id: 1,
    title: "Golftripz",
    category: "Web Application",
    client: "Golftripz",
    date: "2025–2026",
    description:
      "Multi-country golf course booking platform with real-time pricing, availability, and OTP authentication.",
    image: golftripzImage,
    link: "#",
    overview:
      "Golftripz is a comprehensive multi-country golf course booking platform designed for golf enthusiasts to discover, compare, and reserve tee times with ease. The application simplifies the booking experience by combining real-time availability, dynamic pricing, and flexible booking options under a single intuitive interface.\n\nThe platform supports both registered users and guest checkouts, offering OTP-based authentication for secure and quick access. It enables users to book single-day rounds or multi-day golf holiday packages, complete with itinerary planning and reservation management. Built with scalability and performance in mind, Golftripz delivers a smooth, SEO-optimized experience while handling complex booking logic across multiple regions.",
    challenge:
      "Handling real-time pricing, time-slot availability, and complex booking flows while supporting both guest and registered users.",
    solution:
      "Developed a React-based frontend integrated with a Laravel backend. Implemented dynamic search, booking flows, OTP-based authentication, SEO optimizations, CORS handling, and efficient state management using React Hooks and Context API."
  },

  {
    id: 2,
    title: "Fruiting Dessert",
    category: "E-Commerce Platform",
    client: "Fruiting Dessert",
    date: "2023",
    description:
      "Fruit-selling e-commerce platform with admin dashboard, real-time updates, and customer reviews.",
    image: fruitingImage,
    link: 'https://fruitingdesert.netlify.app/',
    overview:
      "Fruiting Dessert is a modern e-commerce web application built to provide customers with a seamless and engaging online fruit shopping experience. The platform focuses on simplicity, speed, and responsiveness, enabling users to browse products, view details, place orders, and submit reviews effortlessly.\n\nThe system includes a powerful admin dashboard that allows administrators to manage products, pricing, availability, and customer feedback in real time. Designed with scalability in mind, the application supports real-time updates, ensuring that inventory and content remain consistent across the platform. The project emphasizes performance optimization, user engagement, and clean UI/UX design.",
    challenge:
      "Building a scalable backend with real-time product updates and ensuring seamless communication between frontend and backend APIs.",
    solution:
      "Developed a responsive frontend using HTML, CSS, Bootstrap, JavaScript, and React. Built a Node.js and MongoDB backend with RESTful APIs, including an admin dashboard for CRUD operations and a review & rating system to improve user engagement."
  },

  {
    id: 3,
    title: "HEPL Business Website",
    category: "Corporate Website",
    client: "HEPL",
    date: "2023",
    description:
      "Responsive business website with live streaming, animations, and performance optimizations.",
    image:
      "https://arulsiva-prortfolio.vercel.app/static/media/hepl.3d95c26df638614f788a.png",
    link: "#",
    overview:
      "The HEPL Business Website is a responsive corporate platform developed to showcase HEPL’s services, capabilities, and events in a professional and engaging manner. The website serves as a digital identity for the organization, focusing on clarity, performance, and user experience across all devices.\n\nThe platform integrates real-time live streaming features to monitor and display events as they occur, enhancing engagement for users and stakeholders. Interactive animations and smooth transitions were incorporated to elevate visual appeal while maintaining optimal performance. The project also involved continuous monitoring and optimization to ensure fast load times, accessibility, and overall functional reliability.",
    challenge:
      "Delivering a visually engaging website while maintaining performance across devices and handling real-time event monitoring.",
    solution:
      "Used HTML, CSS, JavaScript, Bootstrap, and PHP to build the site. Integrated live streaming for real-time event monitoring, added interactive animations, and optimized code to improve website speed and overall functionality."
  },
  {
  id: 4,
  title: "Learning Management System (LMS)",
  category: "Education Platform",
  client: " Demo",
  date: "2025",
  description:
    "Online learning platform with course management, OTP-based authentication, and detailed test analytics for competitive exams.",
  image: lsm,
  link: "https://lms.otademo.com/login",
  overview:
    "The Learning Management System (LMS) is a comprehensive education platform designed to support students preparing for competitive exams such as NEET and JEE. The application provides a structured learning experience by combining course content, online assessments, performance tracking, and user analytics within a single unified system.\n\nThe platform features a modern React.js frontend integrated with a Laravel REST API backend, ensuring smooth data flow and scalability. Students can securely register and log in using OTP-based mobile number authentication, browse available courses, take chapter-wise and topic-wise tests, and track their learning progress through detailed analytics. The system emphasizes usability, performance insights, and exam-oriented learning workflows.",
  challenge:
    "Implementing a secure authentication flow while managing dynamic test content, real-time time tracking, and detailed performance analytics for a large number of users.",
  solution:
    "Developed a React.js frontend integrated with a Laravel REST API backend. Implemented OTP-based mobile authentication, dynamic course and test management, chapter-wise and topic-wise online exams, real-time time tracking per question, and comprehensive analytics including scores, accuracy, test duration, and reattempt functionality."
},
//  {
//     id: 5,
//     title: "IB Order Processing Tool",
//     category: "Enterprise Application",
//     client: "Internal Business (IB)",
//     date: "2024",
//     description:
//       "Enterprise order processing and approval system with role-based access and multi-level ticket approvals.",
//     image: "/images/project-reference.png",
//     link: "#",
//     overview:
//       "The IB Order Processing Tool is a full-scale enterprise application designed to streamline and automate the complete order lifecycle within an organization. The platform connects multiple departments including Sales, General Managers, Supervisors, Planning teams, and Factory units under a single unified system. It ensures transparency, accountability, and structured workflows for every order processed.\n\nThe application eliminates manual dependencies by introducing a digital ticket-based system where orders move through predefined approval stages. Each role has clearly defined permissions, ensuring that approvals and rejections are tracked accurately. The system improves operational efficiency, minimizes human error, and provides real-time visibility into order status across departments.",
//     challenge:
//       "Manual order approvals caused delays, limited visibility, and higher error rates. Ensuring secure approvals across multiple departments while maintaining accountability was a key challenge.",
//     solution:
//       "Built a role-based login and approval workflow using React, Laravel, PHP, and MySQL. Implemented step-by-step ticket approvals and automated order completion only after final factory approval, improving efficiency and reducing ticket errors by approximately 40%."
//   },

];
