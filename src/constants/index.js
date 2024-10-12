import ochi from '../assets/ochi.png';
import bubble from '../assets/bubble.png';
import lazarev from '../assets/lazarev.png';
import nike from '../assets/nike.png';
import calculator from '../assets/calculator.png';
import my_portfolio from '../assets/my_portfolio.png';
import rayban from '../assets/rayban.png';
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLink = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company_name: "Codsoft",
      icon: "codsoft.png",
      iconBg: "#383E56",
      date: "August 2024 - september 2024",
      points: [
        "Developed responsive web pages using React.js and Tailwind CSS.",
        "Worked on improving website performance and accessibility.",
        "Collaborated with design and backend teams to deliver new features.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "Waste Free Haryana",
      icon: "waste.png",
      iconBg: "#E6DEDD",
      date: " August 2023 - September 2023",
      points: [
        "Developing and maintaining the website for Waste Free Haryana initiative.",
        "Implementing new animations using Framer Motion and GSAP.",
        "Ensuring cross-browser compatibility and responsiveness.",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Portfolio",
      description:
        "This animated portfolio showcases my web development projects using React. It features smooth transitions and hover effects with Framer Motion, engaging 3D graphics via React Fiber, and enhanced scrolling with Locomotive Scroll, all within a fully responsive design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Framer-Motion",
          color: "orange-text-gradient",
        },
        {
          name: "Locomotive",
          color: "red-text-gradient",
        },
      ],
      image: my_portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Presentation Design Agency Website",
      description:
        "A sleek, responsive site built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and modern design to showcase the agency’s presentation expertise.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Locomotion",
          color: "orange-text-gradient",
        },
      ],
      image: ochi,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ray-Ban Clone",
      description:
        "This Ray-Ban website showcases the latest eyewear collections using HTML, CSS, and JavaScript. It leverages Sherry.js for dynamic content and engaging animations, delivering a visually appealing and responsive user experience across all devices.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Sherry.js",
          color: "orange-text-gradient",
        },
      ],
      image: rayban,
      source_code_link: "https://github.com/",
    },
    
    {
      name: "Bubble game",
      description:
        "The Bubble Game is an interactive and engaging web-based game developed using HTML, CSS, and JavaScript. Players aim to pop as many bubbles as possible within a time limit, enhancing their reflexes and coordination.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: bubble,
      source_code_link: "https://github.com/",
    },
    {
      name: "Lazarev website clone",
      description:
        "A responsive website clone of Lazarev, designed using HTML, CSS, and JavaScript. This project features smooth scrolling with Locomotive Scroll and dynamic animations for an engaging user experience.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Locomotion",
          color: "orange-text-gradient",
        },
      ],
      image: lazarev,
      source_code_link: "https://github.com/",
    },
    {
      name: "Calculator",
      description:
        "This project features a fully functional calculator designed using HTML, CSS, and JavaScript. The calculator provides basic arithmetic operations, including addition, subtraction, multiplication, and division.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        
      ],
      image: calculator,
      source_code_link: "https://github.com/",
    },
    {
      name: "E-commerce website",
      description:
        "This project is a responsive Nike website, showcasing a selection of Nike’s latest products and promotional campaigns. The website is designed to provide an engaging user experience, reflecting the brand's dynamic aesthetic.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        
        {
          name: "Keyframes, media query",
          color: "orange-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };