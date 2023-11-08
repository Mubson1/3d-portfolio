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
  carrent,
  threejs,
  dotnet,
  python,
  contentHub,
  innovate,
  brokerage,
  rentalHousing,
  clothing,
  migen,
  torchi,
  rubin,
} from "../assets";

export const navLinks = [
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
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Content Writer",
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
    name: "dotnet",
    icon: dotnet,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Content Writing",
    company_name: "Orange Content Hub",
    icon: contentHub,
    iconBg: "#E6DEDD",
    date: "September 2021 - December 2021",
    points: [
      "Creating contents for marketing websites using Wordpress",
      "Implementing extensive researches and ensuring search engine optimization",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Innovate Tech",
    icon: innovate,
    iconBg: "#383E56",
    date: "September 2022 - December 2022",
    points: [
      "Creating Employee Hiring System using MERN stack along with other technologies.",
      "Ensuring data security through Keycloak",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "BOND BROKERAGE",
    icon: brokerage,
    iconBg: "#E6DEDD",
    date: "December 2022 - February 2023",
    points: [
      "Creating a Rental Housing Application using React Native with Expo along with Node Js as backend.",
      "Managing two projects - cross platform mobile application and web-based admin panel",
      "Collaborating with stakeholder and project lead through meetings to finalize the complete requirements",
      "Implementing agile methodology for completion of the completion of project",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Innovate Tech",
    icon: innovate,
    iconBg: "#383E56",
    date: "February 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing industry practices for the web architecture and code base",
      "Adopting to new react compliant libraries and modules like React Query, IFrame, Bootstrap, etc.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Great app, the user interface is very good and accessible. Will launch the app publicly soon.",
    name: "Migen Pulami",
    designation: "Executive Officer",
    company: "BOND BROKERAGE",
    image: migen,
  },
  {
    testimonial:
      "Mubson's dedication, innovation, and delivery of exceptional results have been invaluable to our team's success",
    name: "Torchi Rokaya",
    designation: "Team Lead",
    company: "Innovate Tech",
    image: torchi,
  },
  {
    testimonial:
      "Mubson creates engaging academic atmosphere, highly respected for exceptional leadership.",
    name: "Rubin Thapa",
    designation: "Lecturer",
    company: "Islington College",
    image: rubin,
  },
];

const projects = [
  {
    name: "Rental Housing",
    description:
      "Mobile-based application that allows users to effectively sell or buy the properties based on their needs, book available places for renting, and like or dislike the properties.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: rentalHousing,
    source_code_link: "https://github.com/Mubson1/Housing-Rental-System.git",
  },
  {
    name: "Car Rent",
    description:
      "Web-based solution dedicated to car rental company to increase their work efficiency where cars can be rented, returned, damage request by customer, and many more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "dotnet",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Mubson1/car-rental.git",
  },
  {
    name: "3JS Clothing",
    description:
      "A simple static website based on react-three-fiber where users can choose the style, logo, color, and even auto generate the logo for their shirt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },
    ],
    image: clothing,
    source_code_link: "https://github.com/Mubson1/Clothing-Website.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
