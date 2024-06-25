import { experienceBoxesMock } from "./CvDb";
import ExperienceBox from "./ExperienceBox";

function ExperiencesBody() {
  return (
    <div>
      {experienceBoxesMock.map((experienceBox) => (
        <ExperienceBox
          title={experienceBox.title}
          experiences={experienceBox.experiences}
          experienceClassName={experienceBox.class}
        />
      ))}
    </div>
  );
}

export default ExperiencesBody;
