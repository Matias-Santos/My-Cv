import ContactInfo from "./ContactInfo";
import { DB } from "./CvDb";
import StringList from "./StringList";

function AsideBody() {
  return (
    <aside>
      <ContactInfo
        city={DB.contactInfo.city}
        email={DB.contactInfo.email}
        github={DB.contactInfo.github}
        linkedin={DB.contactInfo.linkedin}
      />
      <h2>Soft Skills</h2>
      <StringList items={DB.softSkills} />
      <h2>Skills</h2>
      <StringList items={DB.skills} />
    </aside>
  );
}

export default AsideBody;
