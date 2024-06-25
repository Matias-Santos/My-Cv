import { ExperienceClass } from "../enums/ExperienceClass.enum";

export type ExperienceT = {
  title: string;
  description: string;
  date: string;
};

export type ExperienceBoxT = {
  title: string;
  experiences: ExperienceT[];
  class: ExperienceClass;
};
