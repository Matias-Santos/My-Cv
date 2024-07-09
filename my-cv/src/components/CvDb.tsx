import { ExperienceT, ProjectT, TechnologyT } from "../types/Types.type";
import cssIcon from "../assets/css-icon.png";
import dockerIcon from "../assets/docker-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import githubIcon from "../assets/git-icon.svg";
import gmailIcon from "../assets/gmail-icon.svg";
import htmlIcon from "../assets/html-icon.png";
import javaIcon from "../assets/java-icon.svg";
import jsIcon from "../assets/js-icon.png";
import linkedinIcon from "../assets/linkedin-icon.svg";
import mysqlIcon from "../assets/mysql-icon.svg";
import nextjsIcon from "../assets/nextjs-icon.svg";
import npmIcon from "../assets/npm-icon.svg";
import postgresqlIcon from "../assets/postgresql-icon.svg";
import pythonIcon from "../assets/python-icon.png";
import reactIcon from "../assets/react-icon.svg";
import swiftIcon from "../assets/swift-icon.png";
import tailwindIcon from "../assets/tailwind-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";

export const contactInfo = {
  city: "Tandil, Bs As, Argentina",
  email: "santos.matias.a.97@gmail.com",
  github: "https://github.com/Matias-Santos",
  linkedin: "https://www.linkedin.com/in/matias-andrés-santos-97/",
};

export const experiences: ExperienceT[] = [
  {
    title: "Tecnologías Rappi, S.A.P.I.: iOS Developer",
    date: "August 2022 - November 2023",
    description: `I contributed to the Restaurants vertical by leading the refactor of product cards from UIKit to SwiftUI. This transition resulted in significantly more efficient and bug-free code.

Additionally, I was part of the Multi-Verticality team, where I developed a feature for the post-purchase screen. This feature enabled users to purchase additional items, such as desserts or beverages, from other shops, thereby enhancing the overall user experience and increasing cross-selling opportunities.`,
  },
  {
    title: "Daeva S.A: Junior iOS Developer - React Native",
    date: "February 2022 - August 2022",
    description: `Contributed to the maintenance and development of new features on the Swiss Medical Mobile
application.

Completed a comprehensive three-month React Native course.`,
  },
  {
    title: "Sistemas Globales SA: Trainee iOS Developer",
    date: "May 2021 - January 2022",
    description: `Carried out a 3 months onboarding training, where we learnt a wide variety of concepts
regarding Swift development, and also learnt how to manage dependencies using Cocoapods,
which allowed us to develop code more efficiently.`,
  },
];

export const projects: ProjectT[] = [
  {
    title: "3d Printing e-commerce",
    description: "Some Description",
    image: gmailIcon,
  },
  {
    title: "URL Shorter Service",
    description: "Some Description",
    image: gmailIcon,
  },
  {
    title: "Extension For VSCode",
    description: "Some Description",
    image: gmailIcon,
  },
  {
    title: "Design System",
    description: "Some Description",
    image: gmailIcon,
  },
];

export const aboutDescription = `As an ongoing Full Stack professional, I have already completed several projects using React, including the use of several other libraries such as Styled
Components, Tailwind or SASS . I am committed to continuously improving my
knowledge and skills in React to contribute to large-scale projects. My goal is to
advance to a senior developer role, where I can lead and direct teams to build
innovative and impactful applications.`;

export const technologies: TechnologyT[] = [
  { name: "React", icon: reactIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Swift", icon: swiftIcon },
  { name: "Java", icon: javaIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Git", icon: gitIcon },
  { name: "NPM", icon: npmIcon },
];

export const learning: TechnologyT[] = [
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Python", icon: pythonIcon },
];

export const contact: TechnologyT[] = [
  { name: "GitHub", icon: githubIcon },
  { name: "Gmail", icon: gmailIcon },
  { name: "LinkedIn", icon: linkedinIcon },
];
