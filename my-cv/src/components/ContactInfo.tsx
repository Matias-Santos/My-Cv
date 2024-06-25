function ContactInfo({
  city,
  email,
  github,
  linkedin,
}: {
  city: string;
  email: string;
  github: string;
  linkedin: string;
}) {
  return (
    <ul>
      <li>{city}</li>
      <li>{email}</li>
      <li>{github}</li>
      <li>{linkedin}</li>
    </ul>
  );
}

export default ContactInfo;
