import { ExperienceClass } from "../enums/ExperienceClass.enum";
import { ExperienceBoxT } from "../types/Types.type";

const contactInfo = {
  city: "Tandil, Bs As, Argentina",
  email: "santos.matias.a.97@gmail.com",
  github: "https://github.com/Matias-Santos",
  linkedin: "https://www.linkedin.com/in/matias-andrés-santos-97/",
};

const softSkills = [
  "Teamwork",
  "Cooperativism",
  "Problem Solving",
  "Positive Attitude",
  "Eager To Learn",
  "Critical Thinking",
];

const skills = [
  "React",
  "React Native",
  "CSS",
  "Styled-Components",
  "Jest",
  "Firebase",
  "Swift",
  "SwiftUI",
  "Git",
  "Java",
  "Spring",
  "MySQL",
];

const leftBoxes: ExperienceBoxT[] = [
  {
    title: "Work Experiences",
    experiences: [
      {
        title: "Sistemas Globales SA: Trainee iOS Developer",
        description:
          "Carried out a 3 months onboarding training. Learned a wide variety of concepts regarding Swift development, and also learnt how to manage dependencies using Cocoapods, which allowed us to develop code more efficiently.",
        date: "May 2021 - January 2022",
      },
      {
        title: "Daeva S.A: Junior iOS Developer",
        description:
          "Contributed to the maintenance and development of new features. Ongoing React Native course.",
        date: "February 2022 - August 2022",
      },
      {
        title: "Tecnologías Rappi, S.A.P.I.: Junior iOS Developer",
        description:
          "Engaged in roles within the restaurant and multiverticallity ecosystems. Focused on app development. Contributed to the creation of innovative features and enhancements, resulting in a noteworthy increase in module engagement from %2.6 to %2.9 over the past few months.",
        date: "August 2022 - November 2023",
      },
    ],
    class: ExperienceClass.ExperienceWork,
  },
];

const rightBoxes: ExperienceBoxT[] = [
  {
    title: "College",
    experiences: [
      {
        title:
          "Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Bs. As.",
        description: "Systems Engineering",
        date: "2015 - Now",
      },
    ],
    class: ExperienceClass.ExperienceCollege,
  },
  {
    title: "Projects",
    experiences: [
      {
        title: "Cryptocurrency Exchange: PostgreSQL",
        description:
          "-Designed a structure of cryptocurrency exchange by utilizing relational databases(PostgreSQL) - Implemented certain services such as obtaining the price of a given currency in real time.",
        date: "",
      },
    ],
    class: ExperienceClass.ExperienceProjects,
  },
];

export const experienceBoxesMock = [...leftBoxes, ...rightBoxes];

export const DB = {
  contactInfo,
  softSkills,
  skills,
};
