export type ExperienceT = {
  title: string;
  date: string;
  description: string;
};

export type ProjectT = {
  title: string;
  description: string;
  image: string;
};

export type TechnologyT = {
  name: string;
  icon: string;
};

export type LeftBoxT = {
  technologies: TechnologyT[];
};
