import { ExperienceClass } from "../enums/ExperienceClass.enum";
import { ExperienceT } from "../types/Types.type";
import Experience from "./Experience";

function ExperienceBox({
  title,
  experiences,
  experienceClassName,
}: {
  title: string;
  experiences: ExperienceT[];
  experienceClassName: ExperienceClass;
}) {
  return (
    <div className={`experienceBox ${experienceClassName}`}>
      <h2>{title}</h2>
      {experiences.map(({ title, description, date }) => (
        <Experience title={title} description={description} date={date} />
      ))}
    </div>
  );
}

export default ExperienceBox;

/*
<Experience
          title="Sistemas Globales SA: Trainee iOS Developer"
          description="Carried out a 3 months onboarding training, where we learnt a wide
          variety of concepts regarding Swift development, and also learnt how
          to manage dependencies using Cocoapods, which allowed us to develop
          code more efficiently."
          date="May 2021 - January 2022"
        />
        <Experience
          title="Daeva S.A: Junior iOS Developer"
          description="Contributed to the maintenance and development of new features on the
          Swiss Medical Mobile application. Ongoing React Native course."
          date="February 2022 - August 2022"
        />
        <Experience
          title="Tecnologías Rappi, S.A.P.I.: Junior iOS Developer"
          description="Engaged in roles within the restaurant and multiverticallity
          ecosystems, specifically focusing on app development. Contributed to
          the creation of innovative features and enhancements, resulting in a
          noteworthy increase in module engagement from %2.6 to %2.9 over the
          past few months."
          date="August 2022 - November 2023"
        />
    
*/
