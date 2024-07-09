import "./Contact.scss";
function Contact({ title }: { title: string }) {
  return (
    <div className="contact-container" key={title}>
      <h3>{title}</h3>
      <ul>
        <li>
          <a href="mailto:santos.matias.a.97@gmail.com?">Send Email</a>
        </li>
        <li>
          <a href="https://github.com/Matias-Santos">View my work</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mat%C3%ADas-andr%C3%A9s-s-3383a8196/">
            Linked In
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Contact;
