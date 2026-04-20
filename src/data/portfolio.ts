import golftripzImage from '../../images/golftripz.png';
import lsm from '../../images/lms.png';
import fruitingImage from '../../images/fruiting.png';
import arulsiva from '../../images/arulsiva.png';
import resumePdf from '../../images/Arulsiva - Software Engineer..pdf';

export const personalInfo = {
  name: "Arulsiva",
  role: "Software Engineer",
  intro:
    "I'm a software engineer specializing in creating robust, high-speed web applications across the frontend and backend. I leverage AI-powered development tools like Cursor, GitHub Copilot, and Claude to accelerate code delivery while maintaining clean, maintainable solutions that solve real-world problems.",
    //  "I'm a software engineer specializing in creating robust, high-speed web applications across the frontend and backend. I focus on writing clean, maintainable code and delivering solutions that solve real-world problems.",
  resumeUrl: resumePdf,
  profileImage:
    "https://arulsiva-prortfolio.vercel.app/static/media/my%20profile%20pic.64077449059229659831.jpg",
  heroImage:arulsiva,
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
    "I am a Software Engineer with experience in creating large-scale web applications and adaptive websites. My expertise spans full-stack development using React, Laravel, Node.js, and PHP.",
    "I have a proven track record of improving speed, strengthening UI stability, and delivering high-quality projects on time. I am passionate about solving complex problems and crafting efficient, future-ready solutions."
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
      "Worked on 3+ large-scale web applications, including hotel and golf course booking systems and EdTech products.",
      "Engineered and maintained applications using Laravel (PHP) for backend services and React with Redux for frontend state management.",
      // "Accelerated development velocity by 40% using AI-powered tools (Cursor, GitHub Copilot, Claude) for code generation, debugging, and refactoring while maintaining code quality standards.",
      "Refined booking workflows covering availability, pricing, reservations, currency conversion, and quiz-based modules for global users.",
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
      "Created adaptive, high-speed websites using HTML, CSS, JavaScript, React.js, and PHP to deliver user-focused web experiences.",
      "Integrated REST APIs and optimized front-end speed, achieving up to 60% reduction in load time.",
      // "Leveraged AI development tools (Cursor, GitHub Copilot, Codex) to streamline code writing, automate repetitive tasks, and accelerate project delivery timelines.",
      "Improved UI stability, flexibility across screen sizes, and speed through DOM manipulation, debugging, and code optimization.",
      "Completed projects across e-commerce, business, and WordPress domains with 90%+ client satisfaction.",
      "Collaborated with team members and clients to gather requirements and deliver high-quality projects on time."
    ],
    type: "work"
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science Engineering",
    institution: "CK College of Engineering and Technology",
    period: "2018 - 2022",
    location: "Cuddalore",
    summary:
      "Established a strong academic foundation in software engineering, problem solving, and contemporary web development.",
  }
];

export const skills = [
  { name: "React.js", level: 90, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/react.2b6a071759fcdac074f4dcad26eef347.svg" },
  { name: "Laravel", level: 85, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/laravel-2.ba995bd47e3a7cc141cc1c9aaa1ac583.svg" },
  { name: "Node.js", level: 80, category: "tech", icon: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" },
  { name: "PHP", level: 85, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/PHP-logo.svg.42409eafdcf3870796b7.png" },
  { name: "MongoDB", level: 75, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/mongodb.6c6da70249bd055e32474d63755dd3db.svg" },
  { name: "MySQL", level: 80, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/mysql.f9e45d29a8d636bf8f78c9c346b7a7ce.svg" },
  { name: "JavaScript", level: 90, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/javascript.e9360603cdd412c8f9acb925313bc3f3.svg" },
  { name: "HTML5", level: 95, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/html.6a342d61e4fe710cf3e5c05b65b0ac87.svg" },
  { name: "CSS3", level: 90, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/css.43b6f4bdbc0f36b9f2dd15c6ebbcea15.svg" },
  { name: "Bootstrap", level: 85, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/bootstrap.19a2d2ff74985cbf49a1aed7fb4d5401.svg" },
  { name: "Git", level: 85, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/git.a0b8447eefa4cd939642f1017ee1c962.svg" },
  { name: "Figma", level: 70, category: "tech", icon: "https://arulsiva-prortfolio.vercel.app/static/media/figma.1cd446080336901b93673164fe5bdcf2.svg" },
  { name: "GitHub Copilot", level: 90, category: "ai", icon: "https://github.githubassets.com/images/modules/site/copilot/copilot.png" },
  { name: "Cursor AI", level: 85, category: "ai", icon: "https://www.cursor.com/brand/icon.svg" },
  { name: "OpenAI Codex", level: 80, category: "ai", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAtx3kZQWfmO0e-tg7tJnSujvKYRk4s1PVw&s" },
  { name: "Antigravity", level: 75, category: "ai", icon: "https://antigravity.google/assets/image/brand/antigravity-icon__full-color.png" },
  { name: "Claude", level: 85, category: "ai", icon: "https://media.licdn.com/dms/image/v2/D4E0BAQFko-zWIZk_pw/company-logo_200_200/B4EZhiRWKvHgAI-/0/1753995371543/claude_logo?e=2147483647&v=beta&t=CVNmFKyWig0Uo78oAr3II6KVLu_o0aXPtnt4S6XgOr8" },
];

export const projects = [
  {
    id: 1,
    title: "Golftripz",
    category: "Web Application",
    client: "Golftripz",
    date: "2025-2026",
    description:
      "Multi-country golf course booking system with live pricing, availability, and OTP authentication.",
    image: golftripzImage,
    link: "#",
    stack: ["React", "PHP", "Redux"],
    overview:
      "Golftripz is a comprehensive multi-country golf course booking system designed for golf enthusiasts to discover, compare, and reserve tee times with ease. The application simplifies the booking experience by combining live availability, dynamic pricing, and flexible booking options within a single intuitive interface.\n\nThe system supports both registered users and guest checkouts, offering OTP-based authentication for secure and quick access. It enables users to book single-day rounds or multi-day golf holiday packages, complete with itinerary planning and reservation management. Designed for growth and speed, Golftripz delivers a smooth, SEO-optimized experience while handling complex booking logic across multiple regions.",
    challenge:
      "Handling live pricing, time-slot availability, and complex booking flows while supporting both guest and registered users.",
    solution:
      "Crafted a React-based frontend integrated with a Laravel backend. Implemented dynamic search, booking flows, OTP-based authentication, SEO improvements, CORS handling, and streamlined state management using React Hooks and Context API."
  },
  {
    id: 2,
    title: "Fruiting Dessert",
    category: "E-Commerce Platform",
    client: "Fruiting Dessert",
    date: "2023",
    description:
      "Fruit-selling e-commerce store with an admin dashboard, live updates, and customer reviews.",
    image: fruitingImage,
    link: "https://fruitingdesert.netlify.app/",
    stack: ["React", "Node.js", "MongoDB", "Bootstrap"],
    overview:
      "Fruiting Dessert is a modern e-commerce web application created to provide customers with a seamless and engaging online fruit shopping experience. The product emphasizes simplicity, speed, and cross-device usability, enabling users to browse products, view details, place orders, and submit reviews effortlessly.\n\nThe system includes a powerful admin dashboard that allows administrators to manage products, pricing, availability, and customer feedback in real time. Designed for growth, the application supports live updates, ensuring that inventory and content remain consistent throughout the store. The project emphasizes speed optimization, user engagement, and polished UI/UX design.",
    challenge:
      "Designing a flexible backend with live product updates and ensuring seamless communication between frontend and backend APIs.",
    solution:
      "Created an adaptive frontend using HTML, CSS, Bootstrap, JavaScript, and React. Set up a Node.js and MongoDB backend with RESTful APIs, including an admin dashboard for CRUD operations and a review and rating system to strengthen user engagement."
  },
  {
    id: 3,
    title: "HEPL Business Website",
    category: "Corporate Website",
    client: "HEPL",
    date: "2023",
    description:
      "Corporate website with live streaming, animations, and speed enhancements.",
    image:
      "https://arulsiva-prortfolio.vercel.app/static/media/hepl.3d95c26df638614f788a.png",
    link: "#",
    stack: ["PHP", "Bootstrap"],
    overview:
      "The HEPL Business Website is an adaptive corporate website created to showcase HEPL's services, capabilities, and events in a professional and engaging manner. The site serves as a digital identity for the organization, focusing on clarity, speed, and user experience across all devices.\n\nThe website integrates live streaming features to monitor and display events as they occur, enhancing engagement for users and stakeholders. Interactive animations and smooth transitions were incorporated to elevate visual appeal while maintaining strong loading efficiency. The project also involved continuous monitoring and refinement to ensure fast load times, accessibility, and overall functional reliability.",
    challenge:
      "Delivering a visually engaging website while maintaining speed across devices and handling live event monitoring.",
    solution:
      "Used HTML, CSS, JavaScript, Bootstrap, and PHP to create the site. Integrated live streaming for real-time event monitoring, added interactive animations, and refined the codebase to improve website speed and overall functionality."
  },
  {
    id: 4,
    title: "Learning Management System (LMS)",
    category: "Education Platform",
    client: "Demo",
    date: "2025",
    description:
      "Online learning system with course management, OTP-based authentication, and detailed test analytics for competitive exams.",
    image: lsm,
    link: "https://lms.otademo.com",
    stack: ["React", "PHP", "Bootstrap"],
    overview:
      "The Learning Management System (LMS) is a comprehensive education system designed to support students preparing for competitive exams such as NEET and JEE. The application provides a structured learning experience by combining course content, online assessments, progress tracking, and user analytics within a single unified environment.\n\nThe system features a modern React.js frontend integrated with a Laravel REST API backend, ensuring smooth data flow and room for expansion. Students can securely register and log in using OTP-based mobile number authentication, browse available courses, take chapter-wise and topic-wise tests, and track their learning progress through detailed analytics. The product emphasizes usability, insight-driven reporting, and exam-oriented learning workflows.",
    challenge:
      "Implementing a secure authentication flow while managing dynamic test content, real-time time tracking, and detailed progress analytics for a large number of users.",
    solution:
      "Built a React.js frontend integrated with a Laravel REST API backend. Implemented OTP-based mobile authentication, dynamic course and test management, chapter-wise and topic-wise online exams, real-time time tracking per question, and comprehensive analytics including scores, accuracy, test duration, and reattempt functionality."
  },
];
